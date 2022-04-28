import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />
      <View style={styles.iconContainer}>
        <Ionicons
          name="arrow-back-circle"
          size={45}
          color="white"
          style={styles.iconContainer}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          BHD {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },

  iconContainer: {
    position: "absolute",
    top: 30,
    left: 15,
  },

  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },

  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "grey",
    color: "#525252",
  },

  container: {
    margin: 10,
  },
});

export default RestaurantDetailsScreen;
