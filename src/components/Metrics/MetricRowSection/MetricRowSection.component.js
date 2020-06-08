import React from "react";
import { Text, View } from "react-native";
import MetricRow from "../MetricRow/MetricRow.component";
import styles from "./MetricRowSection.component.style";

const MetricRowSection = ({ title, metrics }) => {
  const metricRow = (metric) => (
    <MetricRow
      title={metric.title}
      subtitle={metric.subtitle}
      metricValue={metric.metricValue}
      isPositive={metric.isPositive}
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
      {metricsListItems(metrics)}
    </View>
  );
};

export default MetricRowSection;
