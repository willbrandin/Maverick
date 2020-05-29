import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MetricRow from "./MetricRow";

const MetricRowSection = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <MetricRow />
      <MetricRow />
      <MetricRow />
    </View>
  );
};

export default MetricRowSection;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#94949e",
    marginHorizontal: 16,
    paddingTop: 16,
  },
});
