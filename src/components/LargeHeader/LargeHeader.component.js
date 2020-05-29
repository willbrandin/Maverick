import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import styles from "./LargeHeader.component.style";

const LargeHeader = ({ title, subtitle }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

export default LargeHeader;
