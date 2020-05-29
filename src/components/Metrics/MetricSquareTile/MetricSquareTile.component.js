import React from "react";
import { Text, View, Image } from "react-native";
import Spacer from "../../Spacer";
import styles from "./MetricSquareTile.component.style";

const MetricSquareTile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Racked On Time</Text>
      <Text style={styles.subtitle}>Last 7 Days</Text>
      <Text style={styles.metricLargeTitle}>98%</Text>
      <Text style={styles.metricSubtitle}>Got Racked On Time</Text>
      <Spacer />
      <View style={styles.tickerContainer}>
        <Image
          style={styles.tickerImg}
          source={require("../../../../assets/img/tickerRed/TickerRed.png")}
        />
        <Text style={styles.tickerTitle}>Down From Yesterday</Text>
      </View>
    </View>
  );
};

export default MetricSquareTile;
