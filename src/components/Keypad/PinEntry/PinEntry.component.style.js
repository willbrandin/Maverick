import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";
import { title, body } from "../../../styles/common.style";

export default StyleSheet.create({
  header: {
    ...title,
    marginTop: theme.SPACING.LARGE * 2,
  },
  subheader: {
    ...body,
  },
  error: {
    ...body,
    color: theme.DESTRUCTIVE_COLOR,
    fontWeight: theme.FONT_WEIGHT_MEDIUM,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
  },
  finalRow: {
    flexDirection: "row",
    marginLeft: theme.NUMBER_KEY_BUTTON.SIZE + theme.SPACING.MEDIUM, // Width of Button + Margin Left + Margin Right
  },
});
