import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Spacer from "../Spacer";

const MetricSquareTile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Racked On time</Text>
      <Text style={styles.subtitle}>Last 7 Days</Text>
      <Text style={styles.metricLargeTitle}>98%</Text>
      <Text style={styles.metricSubtitle}>Got Racked On Time</Text>
      <Spacer />
      <View style={styles.tickerContainer}>
        <Image
          style={styles.tickerImg}
          source={require("../../assets/img/tickerRed/TickerRed.png")}
        />
        <Text style={styles.tickerTitle}>Down From Yesterday.</Text>
      </View>
    </View>
  );
};

export default MetricSquareTile;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: "#16162D",
    borderRadius: 6,
    width: 200,
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#94949e",
  },
  subtitle: {
    fontSize: 8,
    color: "rgba(148, 148, 148, 0.6)",
    paddingBottom: 8,
  },
  metricLargeTitle: {
    fontWeight: "bold",
    fontSize: 48,
    color: "#fdfdfd",
    paddingBottom: 4,
  },
  metricSubtitle: {
    fontWeight: "500",
    fontSize: 8,
    color: "#94949e",
  },
  tickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tickerTitle: {
    fontSize: 8,
    color: "#94949e",
  },
  tickerImg: {
    transform: [{ rotate: "180deg" }],
    marginRight: 8,
  },
});
