import React from "react";
import { Text, View } from "react-native";
import styles from "./PinEntryCircle.component.style";

const PinEntryCircle = ({ pinMax }) => {
  return pinMax.map((element, index) => (
    <View
      key={index}
      style={element == 0 ? styles.circle : styles.circleFilled}
    />
  ));
};

export default PinEntryCircle;
