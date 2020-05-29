import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PinEntry from "../components/Keypad/PinEntry/PinEntry.component";
import { backgroundPrimary } from "../styles/common.style";

// Context
import { Context as AuthContext } from "../context/AuthContext/AuthContext";

const SignIn = ({ navigation }) => {
  const { state, signIn, clearErrors } = useContext(AuthContext);

  const onPinEntered = async (pinNumber) => {
    console.log(`Requesting Auth with ${pinNumber}`);

    try {
      clearErrors();
      await signIn(pinNumber);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        ...backgroundPrimary,
      }}
    >
      <PinEntry
        onPinEntered={onPinEntered}
        loading={state.isLoading}
        error={state.errorMessage}
        onPinCleared={clearErrors}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
