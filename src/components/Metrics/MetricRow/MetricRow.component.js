import React from "react";
import { Text, View } from "react-native";
import Ticker from "../../Ticker/Ticker.component";
import styles from "./MetricRow.component.style";

const MetricRow = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.title}>Locker Guests</Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.detail}>75</Text>

            <Ticker positive />
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