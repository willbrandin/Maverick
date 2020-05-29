import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";
import { headline } from "../../../styles/common.style";

export default StyleSheet.create({
  container: {
    padding: theme.SPACING.MEDIUM,
    backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
    borderRadius: 6,
  },
  title: {
    ...headline,
  },
});
