import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import styles from "./HomeHeader.component.style";
import { Octicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeHeader = ({ title, subtitle }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeHeader;
