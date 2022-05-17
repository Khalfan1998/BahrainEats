import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import orders from "./assets/data/orders.json";
// import OrdersScreen from "./src/screens/OrdersScreen";
import OrderDelivery from "./src/screens/OrderDelivery";

export default function App() {
  return (
    <View style={styles.container}>
      <OrderDelivery />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 50,
  },
});
