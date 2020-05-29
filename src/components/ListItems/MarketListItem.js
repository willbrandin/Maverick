import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const MarketStatLine = ({ title, value, isNegative }) => (
  <View style={styles.statsContainer}>
    <Text style={styles.statsTitle}>{title}</Text>
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.statsDetail}>{value}</Text>
      <Image
        style={styles.tickerImg}
        source={
          isNegative
            ? require("../../../assets/img/tickerRed/TickerRed.png")
            : require("../../../assets/img/tickerGreen/TickerGreen.png")
        }
      />
    </View>
  </View>
);

const MarketListItem = ({ market }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {market.marketName + ", " + market.marketState}
        </Text>
      </View>

      {/* <MarketStatLine title={"Racked On Time"} value={"98%"} isNegative />
      <MarketStatLine title={"Delivered On Time"} value={"96%"} /> */}
    </View>
  );
};

export default MarketListItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#16162D",
    borderRadius: 6,
  },
  titleContainer: {
    // paddingBottom: 8,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4,
    // borderColor: "red",
    // borderWidth: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  statsTitle: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#94949e",
  },
  statsDetail: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FDFDFD",
    marginRight: 8,
  },
  tickerImg: {},
});
