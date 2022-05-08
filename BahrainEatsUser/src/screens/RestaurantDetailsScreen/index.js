import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsScreen = () => {
  const route = useRoute();

  const id = route.params?.id;
  console.warn(id);

  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => (
          <DishListItem dish={item} keyExtractor={(item) => item.name} />
        )}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsScreen;
