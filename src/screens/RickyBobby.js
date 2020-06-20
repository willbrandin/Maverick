import React from "react";
import MetricScrollView from "../components/MetricScrollView/MetricScrollView.component";

const RickyBobby = ({ navigation }) => {
  return (
    <MetricScrollView
      navigation={navigation}
      endpoint="/data/ricky-bobby"
      title="Ricky Bobby"
    />
  );
};

export default RickyBobby;
