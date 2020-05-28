import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { sub } from "react-native-reanimated";

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

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
  },
  subtitle: {
    // fontWeight: "400",
    fontSize: 16,
    color: "#fff",
    paddingTop: 8,
    lineHeight: 22,
  },
});
