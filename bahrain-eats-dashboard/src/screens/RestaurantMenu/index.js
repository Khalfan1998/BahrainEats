import { Card, Table, Button } from "antd";
import dishes from "../../assets/data/dishes.json";

const RestaurantMenu = () => {
  const tableColumns = [
    {
      title: "Menu Item",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `BHD ${price} `,
    },
    {
      title: "Action",
      key: "action",
      render: () => <Button danger>Remove</Button>,
    },
  ];

  return (
    <Card title={"Menu"} style={{ margin: 20 }}>
      <Table dataSource={dishes} columns={tableColumns} rowKey="id" />
    </Card>
  );
};

export default RestaurantMenu;
