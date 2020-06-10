import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";
import { caption, body, largeTitle } from "../../../styles/common.style";

export default StyleSheet.create({
  title: {
    ...caption,
    fontFamily: theme.GOTHAM_BOLD,
    marginHorizontal: theme.SPACING.MEDIUM,
    paddingTop: theme.SPACING.MEDIUM,
  },
  tabletStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: theme.SPACING.SMALL,
  },
});
