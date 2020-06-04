import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Context as MarketContext } from "../context/MarketSelectorContext/MarketSelectorContext";
import MetricRowSection from "../components/Metrics/MetricRowSection/MetricRowSection.component";
import MetricSquareScrollView from "../components/Metrics/MetricSquareScrollView/MetricSquareScrollView.component";
import { backgroundPrimary } from "../styles/common.style";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader.component";
import MenuHeader from "../components/MenuHeader/MenuHeader.component";
import MetricSquareTile from "../components/Metrics/MetricSquareTile/MetricSquareTile.component";

const Spiderman = ({ navigation }) => {
  const { state: marketState } = useContext(MarketContext);

  useEffect(() => {
    console.log("SPIDERMAN LOADED");
  }, []);

  return (
    <View style={{ ...backgroundPrimary }}>
      <MenuHeader
        title={marketState.selectedMarket.marketName}
        navigation={navigation}
      />

      <ScrollView>
        <HomeHeader title="Spider-Man" />
      </ScrollView>
    </View>
  );
};

export default Spiderman;
