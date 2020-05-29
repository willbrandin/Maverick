import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Spacer from "../Spacer";

const MetricRow = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>Locker Guests</Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.detail}>75</Text>

            <Image
              style={styles.tickerImg}
              source={require("../../../assets/img/tickerGreen/TickerGreen.png")}
            />
          </View>
        </View>
      </View>
      <View style={{ alignSelf: "flex-end" }}>
        <Text style={styles.tickerTitle}>Up From Yesterday</Text>
      </View>
    </View>
  );
};

export default MetricRow;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: "#16162D",
    borderRadius: 6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#94949E",
  },
  detail: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#FDFDFD",
    marginRight: 8,
  },
  tickerTitle: {
    fontSize: 8,
    color: "#94949e",
  },
  tickerImg: {},
});
