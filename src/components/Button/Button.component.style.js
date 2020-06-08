import { StyleSheet } from "react-native";
import theme from "../../styles/theme.style";
import { title, body, caption, headline } from "../../styles/common.style";

export default StyleSheet.create({
  container: {
    margin: theme.SPACING.SMALL,
    width: "90%",
    alignSelf: "center",
  },
  titleContainer: {
    padding: theme.SPACING.SMALL,
  },
  primary: {
    backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
    color: "#FFF",
    borderRadius: 6,
    borderWidth: 2,
  },
  secondary: {
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: theme.PRIMARY_BACKGROUND_COLOR,
    borderRadius: 6,
  },
  titleSecondary: {
    ...headline,
    color: theme.PRIMARY_BACKGROUND_COLOR,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
  },
  titlePrimary: {
    ...headline,
    color: "#FFF",
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
  },
});
