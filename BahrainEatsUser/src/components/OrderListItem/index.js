import { View, Text, Image } from "react-native";

const OrderListItem = ({ order }) => {
  return (
    <View style={{ flexDirection: "row", margin: 10, alignItems: "center" }}>
      <Image
        source={{ uri: order.Restaurant.image }}
        style={{ width: 75, height: 75, marginRight: 5 }}
      />

      <View>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>
          {order.Restaurant.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>5 items &#8226; BHD 44</Text>
        <Text>3 days ago &#8226; {order.status} </Text>
      </View>
    </View>
  );
};

export default OrderListItem;
