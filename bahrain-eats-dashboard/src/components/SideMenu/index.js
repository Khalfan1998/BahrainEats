import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useRestaurantContext } from "../../contexts/RestaurantContext";
import {
  OrderedListOutlined,
  FormOutlined,
  HistoryOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./index.css";

const SideMenu = () => {
  const navigate = useNavigate();
  const { restaurant } = useRestaurantContext();

  const onClick = async (menuItem) => {
    if (menuItem.key === "signOut") {
      await Auth.signOut();

      window.location.reload();
    } else {
      navigate(menuItem.key);
    }
  };

  const mainMenuItems = [
    {
      key: "testHome",
      label: "Test Home",
    },
    {
      key: "testScreen",
      label: "Test Screen",
    },
    {
      key: "/",
      label: "Orders",
      icon: <OrderedListOutlined />,
    },
    {
      key: "menu",
      label: "Menu",
      icon: <FormOutlined />,
    },
    {
      key: "order-history",
      label: "Order History",
      icon: <HistoryOutlined />,
    },
  ];

  const menuItems = [
    ...(restaurant ? mainMenuItems : []),
    {
      key: "settings",
      label: "Settings",
      icon: <SettingOutlined />,
    },
    {
      key: "signOut",
      label: "Sign out",
      danger: "true",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <>
      {restaurant && <h2 className="restaurantName">{restaurant.name}</h2>}

      <Menu items={menuItems} onClick={onClick} />
    </>
  );
};

export default SideMenu;
