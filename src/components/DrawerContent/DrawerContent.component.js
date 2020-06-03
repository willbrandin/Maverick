import React, { useContext } from "react";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { View } from "react-native";
import styles from "./DrawerContent.component.style";

import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Context as MarketContext } from "../../context/MarketSelectorContext/MarketSelectorContext";
import { Context as AuthContext } from "../../context/AuthContext/AuthContext";

const DrawerContent = (props) => {
  const { state: marketState, setEmptyMarkets } = useContext(MarketContext);
  const { signOut } = useContext(AuthContext);

  onSignOutTapped = async () => {
    props.navigation.navigate("Saint");
    setEmptyMarkets();
    await signOut();
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 16,
                alignItems: "center",
              }}
            >
              <Avatar.Text label="WB" size={48} />
              <View
                style={{
                  marginLeft: 16,
                  flexDirection: "column",
                }}
              >
                <Title style={styles.title}>Will Brandin</Title>
                <Caption style={styles.caption}>Admin</Caption>
              </View>
            </View>

            <View style={{ flexDirection: "row", marginTop: 16 }}>
              <Title>{marketState.selectedMarket.marketName}</Title>
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
              onPress={() => {
                props.navigation.navigate("TonyStarch");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="phone-iphone" size={size} color={color} />
              )}
              label="Spider-Man"
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
          onPress={() => {
            props.navigation.navigate("MarketSwitcher");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <MaterialIcons name="exit-to-app" size={size} color={color} />
          )}
          label="Sign Out"
          onPress={onSignOutTapped}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;
