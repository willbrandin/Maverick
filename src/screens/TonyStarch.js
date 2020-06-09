import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { backgroundPrimary } from "../styles/common.style";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader.component";
import MenuHeader from "../components/MenuHeader/MenuHeader.component";

const TonyStarch = ({ navigation }) => {
  useEffect(() => {
    console.log("TONY STARCH LOADED");
  }, []);

  return (
    <View style={{ ...backgroundPrimary }}>
      <MenuHeader navigation={navigation} />

      <ScrollView>
        <HomeHeader title="Tony Starch" subtitle="Last Updated 06/07/2020" />
      </ScrollView>
    </View>
  );
};

export default TonyStarch;

const styles = StyleSheet.create({});
