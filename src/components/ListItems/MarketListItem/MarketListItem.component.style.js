import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";
import { headline } from "../../../styles/common.style";

export default StyleSheet.create({
  container: {
    padding: theme.SPACING.MEDIUM,
    backgroundColor: "#16162D",
    borderRadius: 6,
  },
  title: {
    ...headline,
  },
});
