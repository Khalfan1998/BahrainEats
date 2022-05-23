import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigation />
      </GestureHandlerRootView>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
