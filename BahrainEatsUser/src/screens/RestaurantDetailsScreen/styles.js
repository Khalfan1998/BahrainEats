import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
