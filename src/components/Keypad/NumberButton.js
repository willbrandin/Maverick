import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  clearContainer: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  buttonTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0A0617",
  },
  clearTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0A0617",
  },
});
