import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";
import { caption, body, largeTitle } from "../../../styles/common.style";

export default StyleSheet.create({
  title: {
    ...caption,
    fontWeight: "bold",
    marginHorizontal: theme.SPACING.MEDIUM,
    paddingTop: theme.SPACING.MEDIUM,
  },
});
