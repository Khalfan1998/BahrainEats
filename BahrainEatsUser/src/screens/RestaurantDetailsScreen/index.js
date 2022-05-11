import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import DishListItem from "../../components/DishListItem";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Restaurant } from "../../models";

const RestaurantDetailsScreen = () => {
  const [restaurant, setRestaurant] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;

  useEffect(() => {
    DataStore.query(Restaurant, id).then(setRestaurant);
  }, []);

  if (!restaurant) {
    return <ActivityIndicator size="large" color="gray" />;
  }

  console.log(restaurant);

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
