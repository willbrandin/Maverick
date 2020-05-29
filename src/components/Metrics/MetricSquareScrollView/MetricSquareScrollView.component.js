import React from "react";
import { ScrollView, View } from "react-native";
import MetricSquareTile from "../MetricSquareTile/MetricSquareTile.component";
import theme from "../../../styles/theme.style";

const MetricSquareScrollView = () => {
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
        <MetricSquareTile />
        <MetricSquareTile />
        <MetricSquareTile />
        <MetricSquareTile />
        <MetricSquareTile />
        <MetricSquareTile />
      </ScrollView>
    </View>
  );
};

export default MetricSquareScrollView;
