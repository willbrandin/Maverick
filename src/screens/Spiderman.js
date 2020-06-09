import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { backgroundPrimary } from "../styles/common.style";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader.component";
import MenuHeader from "../components/MenuHeader/MenuHeader.component";
import MetricSquareTile from "../components/Metrics/MetricSquareTile/MetricSquareTile.component";

const Spiderman = ({ navigation }) => {
  useEffect(() => {
    console.log("SPIDERMAN LOADED");
  }, []);

  return (
    <View style={{ ...backgroundPrimary }}>
      <MenuHeader navigation={navigation} />

      <ScrollView>
        <HomeHeader title="Spider-Man" subtitle="Last Updated 06/07/2020" />
      </ScrollView>
    </View>
  );
};

export default Spiderman;
