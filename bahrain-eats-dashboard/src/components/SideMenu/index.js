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
  HomeOutlined,
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
      key: "/",
      label: "Dashboard",
      icon: <i className="icon fas fa-home"></i>,
      className: "text",
    },
    // {
    //   key: "sidebar",
    //   label: "Side Bar",
    // },
    {
      key: "orders",
      label: "Orders",
      icon: <i className="icon fas fa-shopping-bag"></i>,
    },
    {
      key: "menu",
      label: "Menu",
      icon: <i className="icon fas fa-cart-plus"></i>,
    },
    {
      key: "order-history",
      label: "Order History",
      icon: <i className="icon fas fa-bags-shopping"></i>,
    },
  ];

  const menuItems = [
    ...(restaurant ? mainMenuItems : []),
    
    {
      key: "settings",
      label: "Settings",
      icon: <i className="icon fas fa-user"></i>,
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
      {/* {restaurant && <h2 className="restaurantName">{restaurant.name}</h2>} */}

      <Menu items={menuItems} onClick={onClick} />
    </>
  );
};

export default SideMenu;
