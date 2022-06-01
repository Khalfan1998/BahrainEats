import DetailedOrder from "./screens/DetailedOrder";
import Orders from "./screens/Orders";
import { Routes, Route } from "react-router-dom";
import { Layout, Image } from "antd";
import SideMenu from "../src/components/SideMenu";
import RestaurantMenu from "./screens/RestaurantMenu";
import CreateMenuItem from "./screens/CreateMenuItem";

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
            <Route path="menu" element={<RestaurantMenu />} />
            <Route path="menu/create" element={<CreateMenuItem />} />
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
