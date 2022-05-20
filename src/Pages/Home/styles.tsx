import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 50,
    backgroundColor: "#EDF0EF",
  },
  text: {
    color: "rgba(35, 169, 105, 1)",
    fontSize: 35,
    fontStyle: "normal",
    fontWeight: "bold",
    fontFamily: "Helvetica Now Display",
  },
  input: {
    backgroundColor: "#1F1e25",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    padding: 15,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    marginTop: 20,
    backgroundColor: "rgba(73, 226, 149, 1)",
    color: "rgba(255, 255, 255, 1)",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
  },
  p: {
    color: "#1F2D27",
    fontSize: 15,
    fontFamily: "Helvetica Now Display",
  },
  buttonSkills: {
    flex: 3,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 50,
    alignItems: "center",
    margin: 10,
    shadowColor: "#1F2D27",
    shadowOpacity: 0,
    shadowOffset: {
      width: 28,
      height: 64,
    },
  },
  textSkills: {
    color: "rgba(73, 226, 149, 1)",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonStates: {
    flex: 1,
    color: "rgba(73, 226, 149, 1)",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 8,
    borderRadius: 50,
    margin: 10,
    shadowColor: "#1F2D27",
    shadowOpacity: 0,
    shadowOffset: {
      width: 28,
      height: 64,
    },
    width: 9,
    height: 35,
  },
  box: {
    flexDirection: "row",
    margin: 10,
  },
});

export { styles };
