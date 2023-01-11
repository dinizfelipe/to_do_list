import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.3,
    backgroundColor: "#0D0D0D",
    padding: 24,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    paddingHorizontal: 16,
  },
  logo: {
    padding: 60,
    alignSelf: "center",
  },
  form: {
    borderRadius: 10,
    width: "100%",
    flexDirection: "row",
    marginTop: -25,
    marginBottom: 42,
  },
  input: {
    paddingLeft: 10,
    borderRadius: 8,
    flex: 1,
    height: 56,
    padding: 8,
    marginRight: 8,
    color: "#fff",
    fontSize: 13,
    backgroundColor: "#454545",
  },
  button: {
    borderRadius: 8,
    width: 56,
    height: 56,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
  },
});
