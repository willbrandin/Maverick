import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";
import { title, body, caption } from "../../styles/common.style";

export default StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#28283C",
  },
  drawerContent: {
    flex: 1,
  },
  headerSection: {
    paddingLeft: theme.SPACING.MEDIUM,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userInfoNameContainer: {
    marginLeft: theme.SPACING.MEDIUM,
    flexDirection: "column",
  },
  marketNameContainer: {
    flexDirection: "row",
    marginTop: theme.SPACING.LARGE,
  },
  title: {
    ...body,
  },
  caption: {
    ...caption,
    lineHeight: 14,
  },
  marketTitle: {
    ...title,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: theme.SPACING.MEDIUM,
  },
  drawerSection: {
    marginTop: theme.SPACING.SMALL,
  },
  drawerItem: {
    color: "#fff",
  },
  bottomDrawerSection: {
    marginBottom: theme.SPACING.SMALL,
    borderTopColor: theme.TERTIARY_TEXT_COLOR,
    borderTopWidth: 1,
  },
});
