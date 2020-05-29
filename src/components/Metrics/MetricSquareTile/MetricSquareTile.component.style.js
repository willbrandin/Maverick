import { StyleSheet } from "react-native";
import theme from "../../../styles/theme.style";
import { caption, body, largeTitle } from "../../../styles/common.style";

export default StyleSheet.create({
  container: {
    padding: theme.SPACING.MEDIUM,
    marginHorizontal: theme.SPACING.MEDIUM,
    backgroundColor: theme.SECONDARY_BACKGROUND_COLOR,
    borderRadius: 6,
    width: theme.METRIC_TILE.SIZE,
    height: theme.METRIC_TILE.SIZE,
  },
  title: {
    ...body,
    fontWeight: "bold",
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
    fontWeight: "500",
  },
  tickerContainer: {
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
