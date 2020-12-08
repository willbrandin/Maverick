import { StyleSheet, Platform } from "react-native";
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
    paddingTop: Platform.OS === "android" ? theme.SPACING.SMALL : 0,
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
  logo: {
    width: 48,
    height: 48,
    borderRadius: 48,
  },
  title: {
    ...body,
    fontFamily: theme.GOTHAM_BOLD,
    fontWeight: "500",
  },
  caption: {
    ...caption,
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
    borderBottomColor: "rgba(148, 148, 158, 0.1)",
    borderBottomWidth: 1,
  },
  drawerItem: {
    color: "#fff",
  },
  bottomDrawerSection: {
    marginBottom: theme.SPACING.SMALL,
    borderTopColor: "rgba(148, 148, 158, 0.1)",
    borderTopWidth: 1,
  },
  footnote: {
    flexDirection: "row",
    marginLeft: theme.SPACING.MEDIUM,
    marginTop: theme.SPACING.MEDIUM,
  },
  footnoteLabel: {
    ...caption,
    color: theme.TERTIARY_TEXT_COLOR,
    marginHorizontal: theme.SPACING.SMALL / 2,
  },
  footnoteIcon: {
    fontSize: theme.FONT_SIZE_BODY,
    color: theme.TERTIARY_TEXT_COLOR,
  },
});
