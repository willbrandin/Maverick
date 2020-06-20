import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";
import { title, headline, body, caption } from "../../../styles/common.style";
import { Platform } from "react-native";

const defaultStyle = {
  container: {
    padding: theme.SPACING.MEDIUM,
    marginHorizontal: theme.SPACING.MEDIUM,
    marginVertical: theme.SPACING.SMALL,
    backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
    borderRadius: 6,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: theme.SPACING.SMALL,
  },
  leadingContainer: {
    flex: 3,
    justifyContent: "center",
  },
  title: {
    ...headline,
  },
  subtitle: {
    ...caption,
  },
  trailingContainer: {
    flex: 2,
    justifyContent: "center",
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  detail: {
    ...headline,
    marginRight: theme.SPACING.SMALL,
  },
  tickerTitle: {
    ...caption,
  },
  tickerImg: {},
};

const tabletStyle = {
  ...defaultStyle,
  container: {
    ...defaultStyle.container,
    width: "46%",
    marginVertical: theme.SPACING.SMALL,
    borderRadius: 6,
  },
  title: {
    ...title,
    color: theme.TERTIARY_TEXT_COLOR,
  },
  detail: {
    ...title,
    marginRight: theme.SPACING.SMALL,
  },
};

export default StyleSheet.create(Platform.isPad ? tabletStyle : defaultStyle);
