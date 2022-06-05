import AppRoutes from "./components/AppRoutes";
import { Layout, Image } from "antd";
import SideMenu from "../src/components/SideMenu";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const { Sider, Content, Footer } = Layout;

Amplify.configure(awsconfig);

function App() {
  return (
    <Layout>
      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src="https://previews.123rf.com/images/jianghaistudio/jianghaistudio1701/jianghaistudio170100032/69541516-food-logo-made-from-the-flag-of-bahrain.jpg"
          preview={false}
        />
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
  );
}

export default withAuthenticator(App);
