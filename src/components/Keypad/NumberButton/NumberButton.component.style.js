import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";

export default StyleSheet.create({
  container: {
    margin: theme.SPACING.MEDIUM,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: theme.NUMBER_KEY_BUTTON.SIZE,
    height: theme.NUMBER_KEY_BUTTON.SIZE,
    backgroundColor: theme.PRIMARY_TEXT_COLOR,
    borderRadius: 50,
  },
  clearContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: theme.NUMBER_KEY_BUTTON.CLEAR_BUTTON_SIZE,
    height: theme.NUMBER_KEY_BUTTON.CLEAR_BUTTON_SIZE,
    backgroundColor: theme.PRIMARY_TEXT_COLOR,
    borderRadius: 50,
  },
  buttonTitle: {
    fontSize: theme.FONT_SIZE_TITLE,
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    color: theme.SECONDARY_TEXT_COLOR,
  },
  clearTitle: {
    fontSize: theme.FONT_SIZE_BODY,
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    color: theme.SECONDARY_TEXT_COLOR,
  },
});
