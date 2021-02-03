import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";

import MetricRowSection from "../Metrics/MetricRowSection/MetricRowSection.component";
import MetricSquareScrollView from "../Metrics/MetricSquareScrollView/MetricSquareScrollView.component";
import HomeHeader from "../Home/HomeHeader/HomeHeader.component";
import MenuHeader from "../MenuHeader/MenuHeader.component";

import theme from "../../styles/theme.style";
import { backgroundPrimary } from "../../styles/common.style";

import Loader from "../Loader/Loader.component";
import raidersApi from "../../api/raidersApi";

import formatDate from "../../utility/Date/Date+SlashFormat";

const MetricScrollView = ({ navigation, endpoint, title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    const fetch = async () => {
      await requestMetrics();
    };

    fetch();
  }, []);

  const requestMetrics = async () => {
    setIsLoading(true);

    try {
      const response = await raidersApi.get(endpoint);
      setIsLoading(false);
      setMetrics(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const metricSections = (metrics) => {
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

  const lastUpdatedSubtitle = (date) => {
    if (date) {
      const formattedDate = formatDate(date);
      return `Last Updated ${formattedDate}`;
    }
  };

  return (
    <View style={{ ...backgroundPrimary }}>
      <Loader play={isLoading}>
        <MenuHeader navigation={navigation} />

        <ScrollView
          contentContainerStyle={{ paddingBottom: theme.SPACING.LARGE }}
          indicatorStyle="white"
        >
          <HomeHeader
            title={title}
            subtitle={lastUpdatedSubtitle(metrics.lastUpdatedDateUtc)}
          />
          <MetricSquareScrollView metrics={metrics.keyMetrics} />

          {metricSections(metrics.guestMetrics)}
        </ScrollView>
      </Loader>
    </View>
  );
};

export default MetricScrollView;
