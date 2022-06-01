import DetailedOrder from "./screens/DetailedOrder";
import Orders from "./screens/Orders";
import { Routes, Route } from "react-router-dom";
import { Layout, Image } from "antd";
import SideMenu from "../src/components/SideMenu";

const { Sider, Content, Footer } = Layout;

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
          <Routes>
            <Route path="" element={<Orders />} />
            <Route path="order/:id" element={<DetailedOrder />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          BahrainEats Restaurant Dashboard ©2022
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
