import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";

const restaurant = restaurants[0];
("");

const RestaurantDetailsScreen = () => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>
        BHD {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
        {restaurant.maxDeliveryTime} minutes
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
});

export default RestaurantDetailsScreen;
