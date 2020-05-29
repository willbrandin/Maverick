import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./MarketListItem.component.style";

const MarketListItem = ({ market }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {market.marketName + ", " + market.marketState}
        </Text>
      </View>
    </View>
  );
};

export default MarketListItem;
