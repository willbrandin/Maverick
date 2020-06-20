import React from "react";
import MetricScrollView from "../components/MetricScrollView/MetricScrollView.component";

const TonyStarch = ({ navigation }) => {
  return (
    <MetricScrollView
      navigation={navigation}
      endpoint="/data/tony-starch"
      title="Tony Starch"
    />
  );
};

export default TonyStarch;
