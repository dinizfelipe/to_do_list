import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  taskName: {
    flex: 1,
    fontSize: 15,
    color: "#fff",
    padding: 10,
  },
  button: {
    borderColor: "#fff",
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
});
