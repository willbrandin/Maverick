import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PinEntry from "../components/Keypad/PinEntry";

// Context
import { Context as AuthContext } from "../context/AuthContext/AuthContext";

const SignIn = ({ navigation }) => {
  const { state, signIn, clearErrors } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ message: "" });

  const onPinEntered = async (pinNumber) => {
    console.log(`Requesting Auth with ${pinNumber}`);

    try {
      setIsLoading(true);
      await signIn(pinNumber);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#0A0617" }}>
      <PinEntry onPinEntered={onPinEntered} /*disabled={isLoading}*/ />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
