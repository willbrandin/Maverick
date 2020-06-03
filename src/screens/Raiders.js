import React, { useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Context as MarketContext } from "../context/MarketSelectorContext/MarketSelectorContext";
import MetricRowSection from "../components/Metrics/MetricRowSection/MetricRowSection.component";
import MetricSquareScrollView from "../components/Metrics/MetricSquareScrollView/MetricSquareScrollView.component";
import { backgroundPrimary } from "../styles/common.style";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader.component";
import MenuHeader from "../components/MenuHeader/MenuHeader.component";

const Raiders = ({ navigation }) => {
  const { state: marketState } = useContext(MarketContext);

  return (
    <View style={{ ...backgroundPrimary }}>
      <MenuHeader
        title={marketState.selectedMarket.marketName}
        navigation={navigation}
      />

      <ScrollView>
        <HomeHeader title="Raiders" subtitle="Last Updated Yesterday" />

        <MetricSquareScrollView />

        <MetricRowSection title="Active Guests That Have Used Services in 30 Days" />
        <MetricRowSection title="Guests that were inactive that used service in 30 days" />
        <MetricRowSection title="Guests that haven’t used Service in 30 days" />
      </ScrollView>
    </View>
  );
};

export default Raiders;

const styles = StyleSheet.create({});
