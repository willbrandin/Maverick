import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Button.component.style";

const Button = ({ title, primary, secondary, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View
          style={primary ? styles.primary : secondary ? styles.secondary : null}
        >
          <View style={styles.titleContainer}>
            <Text
              style={
                primary
                  ? styles.titlePrimary
                  : secondary
                  ? styles.titleSecondary
                  : null
              }
            >
              {title}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
