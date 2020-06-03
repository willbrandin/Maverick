import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";

export default StyleSheet.create({
  container: {
    padding: theme.SPACING.SMALL / 2,
    color: theme.PRIMARY_BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderRadius: 20,
    // borderColor: "red",
    // borderWidth: 1,
  },
  negativeStyle: {
    transform: [{ rotate: "180deg" }],
  },
  positiveStyle: {},
});
