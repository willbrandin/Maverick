import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";
import { title, body, caption, headline } from "../../styles/common.style";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    // borderColor: "red",
    paddingTop: theme.SPACING.MEDIUM,
    paddingHorizontal: theme.SPACING.MEDIUM,
    paddingBottom: theme.SPACING.MEDIUM,
  },
  titleContainer: {},
  title: {
    ...headline,
    alignContent: "center",
  },
  icon: {
    color: theme.PRIMARY_TEXT_COLOR,
    fontSize: 24,
  },
  iconContainer: {
    position: "absolute",
    left: 16,
  },
});
