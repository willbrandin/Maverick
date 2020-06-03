import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./Ticker.component.style";

const positiveTickerImg = require("../../../assets/img/tickerGreen/TickerGreen.png");
const negativeTickerImg = require("../../../assets/img/tickerRed/TickerRed.png");

const Ticker = ({ positive }) => {
  return (
    <View style={styles.container}>
      <Image
        style={positive ? styles.positiveStyle : styles.negativeStyle}
        source={positive ? positiveTickerImg : negativeTickerImg}
      />
    </View>
  );
};

export default Ticker;
