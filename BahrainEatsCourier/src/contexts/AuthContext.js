import { createContext, useContext, useEffect, useState } from "react";
import { Auth, DataStore } from "aws-amplify";
import { Courier } from "../models";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [dbCourier, setDbCourier] = useState(null);
  //sub is the id of user
  const sub = authUser?.attributes?.sub;

  useEffect(() => {
    Auth.currentAuthenticatedUser({ bypasscache: true }).then(setAuthUser);
  }, []);

  useEffect(() => {
    DataStore.query(Courier, (courier) => courier.sub("eq", sub)).then(
      (couriers) => setDbCourier(couriers[0])
    );
  }, [sub]);

  console.log(dbCourier);

  return (
    <AuthContext.Provider value={{ authUser, dbCourier, sub, setDbCourier }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
