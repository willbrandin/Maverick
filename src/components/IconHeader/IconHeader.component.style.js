import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";
import { title, body, caption } from "../../styles/common.style";

export default StyleSheet.create({
  container: {
    paddingTop: theme.SPACING.LARGE,
    paddingHorizontal: theme.SPACING.MEDIUM,
    paddingBottom: theme.SPACING.MEDIUM,
  },
  titleContainer: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    ...title,
  },
  subtitle: {
    ...caption,
    fontFamily: theme.GOTHAM_BOLD,
  },
  icon: {
    color: theme.PRIMARY_TEXT_COLOR,
    fontSize: 24,
  },
});
