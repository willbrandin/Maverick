import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";

export default StyleSheet.create({
  container: {
    padding: theme.SPACING.SMALL / 2,
    color: theme.PRIMARY_BACKGROUND_COLOR,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
