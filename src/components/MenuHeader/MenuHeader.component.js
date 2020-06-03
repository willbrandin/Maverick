import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import styles from "./MenuHeader.component.style";
import { Feather } from "@expo/vector-icons";
import { useIsDrawerOpen } from "@react-navigation/drawer";

const MenuHeader = ({ title, navigation }) => {
  const isDrawerOpen = useIsDrawerOpen();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            onPress={() => {
              if (!isDrawerOpen) {
                navigation.openDrawer();
              }
            }}
          >
            <Feather name="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MenuHeader;
