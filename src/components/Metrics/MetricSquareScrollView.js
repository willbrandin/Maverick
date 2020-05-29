import React from "react";
import { ScrollView, View } from "react-native";
import MetricSquareTile from "./MetricSquareTile";

const MetricSquareScrollView = () => {
  return (
    <View>
      <ScrollView
        style={{ marginBottom: 16 }}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={232} //your element width
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
