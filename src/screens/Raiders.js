import React from "react";
import MetricScrollView from "../components/MetricScrollView/MetricScrollView.component";

const Raiders = ({ navigation }) => {
  return (
    <MetricScrollView
      navigation={navigation}
      endpoint="/data/raiders"
      title="Raiders"
    />
  );
};

export default Raiders;
