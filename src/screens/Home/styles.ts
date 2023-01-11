import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.2,
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
    marginBottom: 22,
  },
  input: {
    paddingLeft: 10,
    borderRadius: 8,
    flex: 1,
    height: 56,
    padding: 8,
    marginRight: 8,
    color: "#fff",
    fontSize: 16,
    backgroundColor: "#262626",
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
  containerCounts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textCountCriadas: {
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 16,
    paddingRight: 16,
  },
  textCountConcluidas: {
    color: "#5E60CE",
    fontWeight: "bold",
    fontSize: 16,
    paddingRight: 16,
  },
  textNoTasks: {
    color: "#d3d3d3",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    padding: 24,
  },
});
