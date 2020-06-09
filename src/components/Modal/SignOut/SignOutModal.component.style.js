import { StyleSheet, Dimensions } from "react-native";
import theme from "../../../styles/theme.style";
import { title, body, caption, headline } from "../../../styles/common.style";

const screenWidth = Math.round(Dimensions.get("window").width);

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalView: {
    width: screenWidth * 0.8,
    backgroundColor: "#28283C",
    borderRadius: 6,
    padding: theme.SPACING.MEDIUM,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    ...headline,
    textAlign: "center",
  },
});
