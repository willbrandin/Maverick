import React, { useContext } from "react";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { SafeAreaView, View, Text, Image } from "react-native";
import styles from "./DrawerContent.component.style";
import { Drawer } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const logo = require("../../../assets/img/logo/Logo.png");

// Context
import { Context as MarketContext } from "../../context/MarketSelectorContext/MarketSelectorContext";
import { Context as AuthContext } from "../../context/AuthContext/AuthContext";

import * as RootNavigation from "../../utility/RootNavigation";

const DrawerContent = (props) => {
  const { state: marketState, setEmptyMarkets } = useContext(MarketContext);
  const { signOut } = useContext(AuthContext);

  const onSignOutTapped = async () => {
    RootNavigation.reset("Auth");
    // await signOut();
    // setEmptyMarkets();
  };

  return (
    <SafeAreaView style={styles.drawerContainer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.headerSection}>
            <View style={styles.userInfoContainer}>
              <Image style={styles.logo} source={logo} />
              <View style={styles.userInfoNameContainer}>
                <Text style={styles.title}>Will Brandin</Text>
                <Text style={styles.caption}>Admin</Text>
              </View>
            </View>

            <View style={styles.marketNameContainer}>
              <Text style={styles.marketTitle}>
                {marketState.selectedMarket.marketName}
              </Text>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="star-box-outline"
                  size={size}
                  color={color}
                />
              )}
              label="Saint"
              labelStyle={{ fontSize: 16 }}
              inactiveTintColor={styles.drawerItem.color}
              onPress={() => {
                props.navigation.navigate("Saint");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="washing-machine"
                  size={size}
                  color={color}
                />
              )}
              label="Raiders"
              inactiveTintColor={styles.drawerItem.color}
              labelStyle={{ fontSize: 16 }}
              onPress={() => {
                props.navigation.navigate("Raiders");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="truck"
                  size={size}
                  color={color}
                />
              )}
              label="Ricky Bobby"
              inactiveTintColor={styles.drawerItem.color}
              labelStyle={{ fontSize: 16 }}
              onPress={() => {
                props.navigation.navigate("RickyBobby");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons
                  name="laptop-windows"
                  size={size}
                  color={color}
                />
              )}
              label="Tony Starch"
              inactiveTintColor={styles.drawerItem.color}
              labelStyle={{ fontSize: 16 }}
              onPress={() => {
                props.navigation.navigate("TonyStarch");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="phone-iphone" size={size} color={color} />
              )}
              label="Spider-Man"
              inactiveTintColor={styles.drawerItem.color}
              labelStyle={{ fontSize: 16 }}
              onPress={() => {
                props.navigation.navigate("Spiderman");
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons name="store" size={size} color={color} />
          )}
          label="Switch Market"
          inactiveTintColor="#94949e"
          onPress={() => {
            props.navigation.navigate("MarketSwitcher");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons name="exit-to-app" size={size} color={color} />
          )}
          inactiveTintColor="#94949e"
          label="Sign Out"
          onPress={onSignOutTapped}
        />

        <View style={styles.footnote}>
          <MaterialCommunityIcons
            name="code-tags"
            style={styles.footnoteIcon}
          />
          <Text style={styles.footnoteLabel}>with</Text>
          <MaterialCommunityIcons
            style={styles.footnoteIcon}
            name="cards-heart"
          />
          <Text style={styles.footnoteLabel}>by Solvent</Text>
        </View>
      </Drawer.Section>
    </SafeAreaView>
  );
};

export default DrawerContent;
