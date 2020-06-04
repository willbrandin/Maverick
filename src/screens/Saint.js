import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { Context as MarketContext } from "../context/MarketSelectorContext/MarketSelectorContext";
import MetricRowSection from "../components/Metrics/MetricRowSection/MetricRowSection.component";
import MetricSquareScrollView from "../components/Metrics/MetricSquareScrollView/MetricSquareScrollView.component";
import { backgroundPrimary } from "../styles/common.style";
import HomeHeader from "../components/Home/HomeHeader/HomeHeader.component";
import MenuHeader from "../components/MenuHeader/MenuHeader.component";
import theme from "../styles/theme.style";

// MOCKED
import mockedMetrics from "../../mocks/saint/SAINT_Metrics-Response";
import Loader from "../components/Loader/Loader.component";

const Saint = ({ navigation }) => {
  const { state: marketState } = useContext(MarketContext);
  const [isLoading, setIsLoading] = useState(false);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const fetch = async (market) => {
      await requestMetrics(market);
    };

    fetch(marketState.selectedMarket);
  }, [marketState.selectedMarket]);

  requestMetrics = async (market) => {
    const { marketId, processorId } = market;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMetrics(mockedMetrics);
    }, 5000);
  };

  metricSections = (metrics) => {
    if (metrics !== undefined) {
      return metrics.map((metric) => {
        return (
          <MetricRowSection
            title={metric.sectionTitle}
            metrics={metric.metrics}
            key={metric.sectionTitle}
          />
        );
      });
    }
  };

  return (
    <View style={{ ...backgroundPrimary }}>
      <Loader play={isLoading}>
        <MenuHeader
          title={marketState.selectedMarket.marketName}
          navigation={navigation}
        />

        <ScrollView
          contentContainerStyle={{ paddingBottom: theme.SPACING.LARGE }}
        >
          <HomeHeader title="Saint" />
          <MetricSquareScrollView metrics={metrics.keyMetrics} />
          {metricSections(metrics.guestMetrics)}
        </ScrollView>
      </Loader>
    </View>
  );
};

export default Saint;
