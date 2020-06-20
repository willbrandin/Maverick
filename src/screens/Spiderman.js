import React from "react";
import MetricScrollView from "../components/MetricScrollView/MetricScrollView.component";

const Spiderman = ({ navigation }) => {
  return (
    <MetricScrollView
      navigation={navigation}
      endpoint="/data/spiderman"
      title="Spiderman"
    />
  );
};

export default Spiderman;
