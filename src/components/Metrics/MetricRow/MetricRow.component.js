import React from "react";
import { Text, View } from "react-native";
import Ticker from "../../Ticker/Ticker.component";
import styles from "./MetricRow.component.style";

const MetricRow = ({
  title,
  subtitle,
  metricValue,
  metricSubtitle,
  isPositive,
}) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>{title}</Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.detail}>{metricValue}</Text>

            <Ticker positive={isPositive} />
          </View>
        </View>
      </View>
      <View style={{ alignSelf: "flex-end" }}>
        <Text style={styles.tickerTitle}>{metricSubtitle}</Text>
      </View>
    </View>
  );
};

export default MetricRow;
