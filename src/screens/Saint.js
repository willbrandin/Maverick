import React from "react";
import MetricScrollView from "../components/MetricScrollView/MetricScrollView.component";

const Saint = ({ navigation }) => {
  return (
    <MetricScrollView
      navigation={navigation}
      endpoint="/data/saint"
      title="Saint"
    />
  );
};

export default Saint;
