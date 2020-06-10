import React from "react";
import { Text, View, Platform } from "react-native";
import MetricRow from "../MetricRow/MetricRow.component";
import styles from "./MetricRowSection.component.style";

// TODO: - https://docs.expo.io/versions/latest/sdk/device/#enums
// Use Device.Tablet to set grid style for list items.
const MetricRowSection = ({ title, metrics }) => {
  const metricRow = (metric) => (
    <MetricRow
      title={metric.title}
      subtitle={metric.subtitle}
      metricValue={metric.metricValue}
      isPositive={metric.isPositive}
      metricSubtitle="Up from Last Week"
      key={metric.title}
    />
  );

  const metricsListItems = (metrics) => {
    if (metrics !== undefined) {
      return metrics.map((metric) => {
        return metricRow(metric);
      });
    }
  };

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={Platform.isPad ? styles.tabletStyle : null}>
        {metricsListItems(metrics)}
      </View>
    </View>
  );
};

export default MetricRowSection;
