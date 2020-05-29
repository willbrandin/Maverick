import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";
import { title, caption } from "../../../styles/common.style";

export default StyleSheet.create({
  container: {
    padding: theme.SPACING.MEDIUM,
    marginHorizontal: theme.SPACING.MEDIUM,
    marginVertical: theme.SPACING.SMALL,
    backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
    borderRadius: 6,
  },
  title: {
    ...title,
  },
  detail: {
    ...title,
    marginRight: theme.SPACING.SMALL,
  },
  tickerTitle: {
    ...caption,
  },
  tickerImg: {},
});
