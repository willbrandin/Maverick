import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Context as MarketContext } from "../context/MarketSelectorContext/MarketSelectorContext";
import MetricRowSection from "../components/Metrics/MetricRowSection/MetricRowSection.component";
import MetricSquareScrollView from "../components/Metrics/MetricSquareScrollView/MetricSquareScrollView.component";
import { backgroundPrimary } from "../styles/common.style";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader.component";
import MenuHeader from "../components/MenuHeader/MenuHeader.component";

const Raiders = ({ navigation }) => {
  const { state: marketState } = useContext(MarketContext);

  useEffect(() => {
    console.log("RAIDERS LOADED");
  }, []);

  return (
    <View style={{ ...backgroundPrimary }}>
      <MenuHeader
        title={marketState.selectedMarket.marketName}
        navigation={navigation}
      />

      <ScrollView>
        <HomeHeader title="Raiders" subtitle="Last Updated Yesterday" />
      </ScrollView>
    </View>
  );
};

export default Raiders;

const styles = StyleSheet.create({});
