import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./NumberButton.component.style";

const NumberButton = ({ number, onPress, isClear }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onPress(number)}>
        <View style={isClear ? styles.clearContainer : styles.buttonContainer}>
          <Text style={isClear ? styles.clearTitle : styles.buttonTitle}>
            {number}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NumberButton;
