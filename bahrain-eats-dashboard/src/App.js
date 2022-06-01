import DetailedOrder from "./screens/DetailedOrder";
import Orders from "./screens/Orders";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="" element={<Orders />} />
      <Route path="order/:id" element={<DetailedOrder />} />
    </Routes>
  );
}

export default App;
