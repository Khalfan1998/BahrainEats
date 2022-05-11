import { View, Text, Image } from "react-native";
import styles from "./styles";

const DEFAULT_IMAGE =
  "https://i.kym-cdn.com/photos/images/facebook/002/335/219/8fa.jpg";

const RestaurantDetailsScreen = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: restaurant.image.startsWith("http")
            ? restaurant.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          BHD {restaurant.deliveryFee.toFixed(1)} &#8226;{" "}
          {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
        </Text>

        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};

export default RestaurantDetailsScreen;
