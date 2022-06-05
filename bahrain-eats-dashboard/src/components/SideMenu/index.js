import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { Auth } from "aws-amplify";

const SideMenu = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      key: "/",
      label: "Orders",
    },
    {
      key: "menu",
      label: "Menu",
    },
    {
      key: "order-history",
      label: "Order History",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      key: "signOut",
      label: "Sign out",
      danger: "true",
    },
  ];

  const onMenuItemClicked = async (menuItem) => {
    if (menuItem.key === "signOut") {
      await Auth.signOut();
      window.location.reload();
    } else {
      navigate(menuItem.key);
    }
  };

  return <Menu items={menuItems} onClick={onMenuItemClicked} />;
};

export default SideMenu;
