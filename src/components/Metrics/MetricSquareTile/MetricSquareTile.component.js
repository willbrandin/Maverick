import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./MetricSquareTile.component.style";
import Ticker from "../../Ticker/Ticker.component";

const MetricSquareTile = ({
  title,
  subtitle,
  metricTitle,
  metricSubtitle,
  increase,
  tickerTitle,
  arrowColor,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text
        adjustsFontSizeToFit
        minimumFontScale={0.8}
        numberOfLines={1}
        style={{
          ...styles.metricLargeTitle,
          fontSize: metricTitle.length > 4 ? 38 : 48,
        }}
      >
        {metricTitle}
      </Text>
      <Text style={styles.metricSubtitle}>{metricSubtitle}</Text>
      <View style={styles.tickerContainer}>
        <Ticker increase={increase} arrowColor={arrowColor} />
        <Text style={styles.tickerTitle}>{tickerTitle}</Text>
      </View>
    </View>
  );
};

export default MetricSquareTile;
