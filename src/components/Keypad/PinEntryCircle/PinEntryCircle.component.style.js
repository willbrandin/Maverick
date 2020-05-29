import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  circle: {
    margin: theme.SPACING.SMALL,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderColor: theme.PRIMARY_TEXT_COLOR,
    borderWidth: 3,
  },
  circleFilled: {
    margin: theme.SPACING.SMALL,
    width: 20,
    height: 20,
    borderRadius: 100 / 2,
    backgroundColor: theme.PRIMARY_TEXT_COLOR,
  },
});
