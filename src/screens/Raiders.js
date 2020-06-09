import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { backgroundPrimary } from "../styles/common.style";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader.component";
import MenuHeader from "../components/MenuHeader/MenuHeader.component";

const Raiders = ({ navigation }) => {
  useEffect(() => {
    console.log("RAIDERS LOADED");
  }, []);

  return (
    <View style={{ ...backgroundPrimary }}>
      <MenuHeader navigation={navigation} />

      <ScrollView>
        <HomeHeader title="Raiders" subtitle="Last Updated Yesterday" />
      </ScrollView>
    </View>
  );
};

export default Raiders;

const styles = StyleSheet.create({});
