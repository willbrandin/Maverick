import React from "react";
import { Text, View } from "react-native";
import Ticker from "../../Ticker/Ticker.component";
import styles from "./MetricRow.component.style";

const MetricRow = ({ title, metricValue, metricSubtitle, isPositive }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.leadingContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.trailingContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.detail}>{metricValue}</Text>

            <Ticker positive={isPositive} />
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <Text style={styles.tickerTitle}>{metricSubtitle}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MetricRow;
