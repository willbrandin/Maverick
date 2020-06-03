import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import styles from "./IconHeader.component.style";
import { TouchableOpacity } from "react-native-gesture-handler";

const IconHeader = ({ title, subtitle, icon, onTapIcon }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity onPress={onTapIcon}>{icon}</TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </SafeAreaView>
  );
};

export default IconHeader;
