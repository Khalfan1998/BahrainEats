import { Card, Table, Tag } from "antd";
import { useState, useEffect } from "react";
import { useRestaurantContext } from "../../contexts/RestaurantContext";
import { DataStore } from "aws-amplify";
import { Order, OrderStatus } from "../../models";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const { restaurant } = useRestaurantContext();

  useEffect(() => {
    if (!restaurant) {
      return;
    }
    DataStore.query(Order, (order) =>
      order
        .orderRestaurantId("eq", restaurant.id)
        .or((orderStatus) =>
          orderStatus
            .status("eq", "PICKED_UP")
            .status("eq", "COMPLETED")
            .status("eq", "DECLINED_BY_RESTAURANT")
        )
    ).then(setOrders);
  }, [restaurant]);

  const renderOrderStatus = (orderStatus) => {
    const statusToColor = {
      [OrderStatus.NEW]: "green",
      [OrderStatus.COOKING]: "orange",
      [OrderStatus.READY_FOR_PICKUP]: "black",
      [OrderStatus.ACCEPTED]: "#36a95c",
      [OrderStatus.PICKED_UP]: "#716d6d",
      [OrderStatus.COMPLETED]: "blue",
      [OrderStatus.DECLINED_BY_RESTAURANT]: "red",
    };

    return <Tag color={statusToColor[orderStatus]}>{orderStatus}</Tag>;
  };

  const tableColumns = [
    {
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Price",
      dataIndex: "total",
      key: "total",
      render: (price) => `BHD ${price.toFixed(2)} `,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: renderOrderStatus,
    },
  ];

  return (
    <Card title={"Orders History"} style={{ margin: 20 }}>
      <Table dataSource={orders} columns={tableColumns} rowKey="orderID" />
    </Card>
  );
};

export default OrderHistory;
