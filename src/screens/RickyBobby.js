import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { backgroundPrimary } from "../styles/common.style";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader.component";
import MenuHeader from "../components/MenuHeader/MenuHeader.component";

const RickyBobby = ({ navigation }) => {
  useEffect(() => {
    console.log("Ricky Bobby LOADED");
  }, []);

  return (
    <View style={{ ...backgroundPrimary }}>
      <MenuHeader navigation={navigation} />

      <ScrollView>
        <HomeHeader title="Ricky Bobby" subtitle="Last Updated Yesterday" />
      </ScrollView>
    </View>
  );
};

export default RickyBobby;

const styles = StyleSheet.create({});
