import React, { useContext, useEffect } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Context as MarketContext } from "../context/MarketSelectorContext/MarketSelectorContext";
import LargeHeader from "../components/LargeHeader/LargeHeader.component";
import Spacer from "../components/Spacer";
import MarketListItem from "../components/ListItems/MarketListItem/MarketListItem.component";

import { backgroundPrimary } from "../styles/common.style";
import MenuHeader from "../components/MenuHeader/MenuHeader.component";

const MarketSwitcher = ({ navigation }) => {
  const { state, fetchMarkets, selectedMarket } = useContext(MarketContext);

  useEffect(() => {
    const fetch = async () => {
      await fetchMarkets();
    };

    fetch();
  }, []);

  const renderItem = ({ item: market }) => (
    <View
      style={{
        marginHorizontal: 16,
        marginVertical: 8,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          selectedMarket(market);
        }}
      >
        <MarketListItem market={market} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ ...backgroundPrimary }}>
      <MenuHeader title="Select Market" navigation={navigation} />
      <FlatList
        keyExtractor={(market) => market.marketId.toString()}
        data={state.availableMarkets}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MarketSwitcher;
