import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";
import { caption, body, largeTitle } from "../../../styles/common.style";

export default StyleSheet.create({
  container: {
    padding: theme.SPACING.MEDIUM,
    marginHorizontal: theme.SPACING.MEDIUM,
    backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
    borderRadius: 8,
    width: theme.METRIC_TILE.SIZE,
    height: theme.METRIC_TILE.SIZE,
  },
  title: {
    ...body,
    fontFamily: theme.GOTHAM_BOLD,
    color: theme.TERTIARY_TEXT_COLOR,
  },
  subtitle: {
    ...caption,
    paddingBottom: theme.SPACING.SMALL,
  },
  metricLargeTitle: {
    ...largeTitle,
  },
  metricSubtitle: {
    ...caption,
  },
  tickerContainer: {
    position: "absolute",
    left: theme.SPACING.MEDIUM,
    bottom: theme.SPACING.MEDIUM,
    flexDirection: "row",
    alignItems: "center",
  },
  tickerTitle: {
    ...caption,
  },
  tickerImg: {
    transform: [{ rotate: "180deg" }],
    marginRight: 8,
  },
});
