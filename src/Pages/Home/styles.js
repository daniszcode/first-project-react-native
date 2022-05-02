import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 50,
    backgroundColor: "#FF9999",
  },
  text: {
    fontSize: 55,
    fontStyle: "normal",
    color: "black",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1e25",
    color: "#FFF",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#CC00CC",
    color: "#FFF",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
  },
  p: {
    color: "#FFF",
    fontSize: 15,
  },
  buttonSkills: {
    backgroundColor: "#1F1e25",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
  },
  textSkills: {
    color: "#FFF",
    fontSize: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
});

export { styles };
