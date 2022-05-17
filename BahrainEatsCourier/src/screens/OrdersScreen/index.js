import { useRef, useMemo } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import orders from "../../../assets/data/orders.json";
import OrderItem from "../../components/OrderItem";
import MapView, { Marker } from "react-native-maps";
import { Entypo } from "@expo/vector-icons";

const OrdersScreen = () => {
  const bottomSheetRef = useRef(null);
  const { width, height } = useWindowDimensions();

  const snapPoints = useMemo(() => ["12%", "95%"], []);

  return (
    <View style={{ backgroundColor: "lightblue", flex: 1 }}>
      <MapView
        style={{
          height,
          width,
        }}
        showsUserLocation
        followsUserLocation
      >
        <Marker
          title={"Hello"}
          description={"World"}
          coordinate={{
            latitude: 26.2326137114,
            longitude: 50.5349907044,
          }}
        >
          <View
            style={{ backgroundColor: "green", padding: 5, borderRadius: 15 }}
          >
            <Entypo name="shop" size={24} color="white" />
          </View>
        </Marker>
      </MapView>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={1}>
        <View style={{ marginBottom: 30, alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              letterSpacing: 0.5,
              paddingBottom: 5,
            }}
          >
            You're Online
          </Text>
          <Text style={{ letterSpacing: 0.5, color: "gray" }}>
            Available Orders: {orders.length}
          </Text>
        </View>
        <FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem order={item} />}
        />
      </BottomSheet>
    </View>
  );
};

export default OrdersScreen;
