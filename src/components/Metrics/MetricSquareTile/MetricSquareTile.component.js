import React from "react";
import { Text, View, Image } from "react-native";
import Spacer from "../../Spacer";
import styles from "./MetricSquareTile.component.style";
import Ticker from "../../Ticker/Ticker.component";

const MetricSquareTile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Racked On Time</Text>
      <Text style={styles.subtitle}>Last 7 Days</Text>
      <Text style={styles.metricLargeTitle}>98%</Text>
      <Text style={styles.metricSubtitle}>Got Racked On Time</Text>
      {/* <Spacer /> */}
      <View style={styles.tickerContainer}>
        <Ticker />
        <Text style={styles.tickerTitle}>Down From Yesterday</Text>
      </View>
    </View>
  );
};

export default MetricSquareTile;
