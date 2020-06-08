import React from "react";
import { ScrollView, View } from "react-native";
import MetricSquareTile from "../MetricSquareTile/MetricSquareTile.component";
import theme from "../../../styles/theme.style";

const MetricSquareScrollView = ({ metrics }) => {
  const metricTile = (metric) => (
    <MetricSquareTile
      title={metric.title}
      subtitle={metric.subtitle}
      metricTitle={metric.metricTitle}
      metricSubtitle={metric.metricSubtitle}
      isPositive={metric.isPositive}
      tickerTitle={metric.tickerTitle}
      key={metric.title}
    />
  );

  const metricsListItems = (metrics) => {
    if (metrics !== undefined) {
      return metrics.map((metric) => {
        return metricTile(metric);
      });
    }
  };

  return (
    <View>
      <ScrollView
        style={{ marginBottom: theme.SPACING.MEDIUM }}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={theme.METRIC_TILE.SIZE + theme.SPACING.MEDIUM * 2} //your element width
        snapToAlignment={"start"}
        showsHorizontalScrollIndicator={false}
      >
        {metricsListItems(metrics)}
      </ScrollView>
    </View>
  );
};

export default MetricSquareScrollView;
