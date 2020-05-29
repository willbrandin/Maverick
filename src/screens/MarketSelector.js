import React, { useContext, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Context as MarketContext } from "../context/MarketSelectorContext/MarketSelectorContext";
import LargeHeader from "../components/LargeHeader/LargeHeader.component";
import Spacer from "../components/Spacer";
import MarketListItem from "../components/ListItems/MarketListItem/MarketListItem.component";

const MarketSelector = () => {
  const { state, fetchMarkets, selectedMarket } = useContext(MarketContext);

  useEffect(() => {
    const fetch = async () => {
      await fetchMarkets();
    };

    fetch();
  }, []);

  renderItem = ({ item: market }) => (
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
    <View style={{ flex: 1, backgroundColor: "#0A0617" }}>
      <LargeHeader
        title={"Select Market"}
        subtitle={
          "To see more details, select a market. You can always select another."
        }
      />
      <Spacer />
      <FlatList
        keyExtractor={(market) => market.marketId.toString()}
        data={state.availableMarkets}
        renderItem={this.renderItem}
      />
    </View>
  );
};

export default MarketSelector;
