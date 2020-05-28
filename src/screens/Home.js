import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MetricRow from "../components/Metrics/MetricRow";
import MetricSquareTile from "../components/Metrics/MetricSquareTile";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0A0617" }}>
      <MetricSquareTile />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 12,
          color: "#94949e",
          padding: 16,
        }}
      >
        Active Guests That Have Used Services in 30 Days
      </Text>
      <MetricRow />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
