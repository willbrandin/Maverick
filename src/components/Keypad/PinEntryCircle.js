import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PinEntryCircle = ({ pinMax }) => {
  return pinMax.map((element, index) => (
    <View
      key={index}
      style={element == 0 ? styles.circle : styles.circleFilled}
    />
  ));
};

export default PinEntryCircle;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  circle: {
    margin: 8,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderColor: "white",
    borderWidth: 3,
  },
  circleFilled: {
    margin: 8,
    width: 20,
    height: 20,
    borderRadius: 100 / 2,
    backgroundColor: "white",
  },
});
