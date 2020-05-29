import React from "react";
import { Text, View } from "react-native";
import MetricRow from "../MetricRow/MetricRow.component";
import styles from "./MetricRowSection.component.style";

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
