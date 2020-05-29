import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./PinEntry.component.style";
import NumberButton from "../NumberButton/NumberButton.component";
import Spacer from "../../Spacer";
import PinEntryCircle from "../PinEntryCircle/PinEntryCircle.component";
import { SafeAreaView } from "react-native-safe-area-context";

const pinLimit = 6;

const PinEntry = ({ onPinEntered, loading, error, onPinCleared }) => {
  const [pinNumber, setPin] = useState("");
  const [pinDisplay, setDisplay] = useState([0, 0, 0, 0, 0, 0]);

  const onTapButton = (number) => {
    const newPin = pinNumber + number;

    if (newPin.length > pinLimit) {
      return;
    }

    const newPinDisplay = pinDisplay;
    newPinDisplay[newPin.length - 1] = 1;
    setDisplay(newPinDisplay);
    setPin(newPin);
    console.log(`Current Pin is ${newPin}`);

    if (newPin.length == pinLimit) {
      onPinEntered(newPin);
    }
  };

  const onTapClear = () => {
    console.log("Pin Cleared");

    setDisplay([0, 0, 0, 0, 0, 0]);
    setPin("");
    onPinCleared();
  };

  return (
    <SafeAreaView
      style={styles.container}
      pointerEvents={loading ? "none" : "auto"} // Logic to be used for when loading API
    >
      <Spacer />
      <Text style={styles.header}>Welcome back!</Text>
      <Text style={styles.subheader}>Sign in to continue</Text>
      <Spacer />

      <View style={styles.buttonRow}>
        <PinEntryCircle pinMax={pinDisplay} />
      </View>
      <Text style={styles.error}>{error}</Text>

      <Spacer />

      <View style={styles.buttonRow}>
        <NumberButton number={"1"} onPress={onTapButton} />
        <NumberButton number={"2"} onPress={onTapButton} />
        <NumberButton number={"3"} onPress={onTapButton} />
      </View>
      <View style={styles.buttonRow}>
        <NumberButton number={"4"} onPress={onTapButton} />
        <NumberButton number={"5"} onPress={onTapButton} />
        <NumberButton number={"6"} onPress={onTapButton} />
      </View>
      <View style={styles.buttonRow}>
        <NumberButton number={"7"} onPress={onTapButton} />
        <NumberButton number={"8"} onPress={onTapButton} />
        <NumberButton number={"9"} onPress={onTapButton} />
      </View>
      <View style={styles.finalRow}>
        <NumberButton number={"0"} onPress={onTapButton} />
        <NumberButton number={"X"} isClear onPress={onTapClear} />
      </View>
      <Spacer />
    </SafeAreaView>
  );
};

export default PinEntry;
