import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";
import { title, body } from "../../styles/common.style";

export default StyleSheet.create({
  container: {
    paddingTop: theme.SPACING.LARGE,
    paddingHorizontal: theme.SPACING.MEDIUM,
    paddingBottom: theme.SPACING.SMALL,
  },
  title: {
    ...title,
  },
  subtitle: {
    ...body,
    marginTop: theme.SPACING.SMALL,
  },
});
