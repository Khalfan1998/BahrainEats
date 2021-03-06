import AppRoutes from "./components/AppRoutes";
import { Layout, Image } from "antd";
import SideMenu from "../src/components/SideMenu";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import RestaurantContextProvider from "./contexts/RestaurantContext";
import "./App.css";
import Navbar from "./screens/Navbar";
import NewSideMenu from "../src/components/NewSideMenu";

const { Sider, Content, Footer } = Layout;

Amplify.configure(awsconfig);

function App() {
  return (
    <RestaurantContextProvider>
      <Navbar />
      <Layout>
        <Sider style={{ height: "100vh", backgroundColor: "white" }}>
          {/* <NewSideMenu /> */}
          {/* <Image
            src="https://previews.123rf.com/images/jianghaistudio/jianghaistudio1701/jianghaistudio170100032/69541516-food-logo-made-from-the-flag-of-bahrain.jpg"
            preview={false}
            style={{ width: "50%", marginLeft: "40px", marginBottom: "20px" }}
          /> */}
          <SideMenu />
        </Sider>
        <Layout>
          <Content>
            <AppRoutes />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            BahrainEats Restaurant Dashboard ©2022
          </Footer>
        </Layout>
      </Layout>
    </RestaurantContextProvider>
  );
}

export default withAuthenticator(App);
