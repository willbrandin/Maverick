import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Ticker.component.style";

const tickerImg = require("../../../assets/img/tickerRed/TickerRed.png");

const Ticker = ({ increase, arrowColor }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          transform: increase ? [] : [{ rotate: "180deg" }],
          tintColor: arrowColor !== undefined ? arrowColor : "#FFF",
        }}
        source={tickerImg}
      />
    </View>
  );
};

export default Ticker;
