import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import LargeHeader from "../components/LargeHeader/LargeHeader.component";
import { Context as MarketContext } from "../context/MarketSelectorContext/MarketSelectorContext";
import MetricRowSection from "../components/Metrics/MetricRowSection";
import MetricSquareScrollView from "../components/Metrics/MetricSquareScrollView";

const Home = () => {
  const { state: marketState } = useContext(MarketContext);

  return (
    <View style={{ flex: 1, backgroundColor: "#0A0617" }}>
      <LargeHeader title={marketState.selectedMarket.marketName} />

      <ScrollView>
        <MetricSquareScrollView />

        <MetricRowSection title="Active Guests That Have Used Services in 30 Days" />
        <MetricRowSection title="Guests that were inactive that used service in 30 days" />
        <MetricRowSection title="Guests that haven’t used Service in 30 days" />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
