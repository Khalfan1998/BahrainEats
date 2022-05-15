import { View, Text, StyleSheet, FlatList } from "react-native";
import BasketDishItem from "../../components/BasketDishItem";
import { useBasketContext } from "../../contexts/BasketContext";

const Basket = () => {
  const { restaurant, basketDishes, totalPrice } = useBasketContext();

  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant?.name}</Text>
      <Text style={styles.yourItems}>Your Items</Text>

      <FlatList
        data={basketDishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.button}>
        <Text style={styles.buttonText}>
          Create Order &#8226; BHD {totalPrice.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40, //temporary fix
    padding: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  yourItems: {
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 20,
  },
  description: {
    color: "grey",
  },
  separator: {
    height: 1,
    backgroundColor: "lightgrey",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default Basket;
