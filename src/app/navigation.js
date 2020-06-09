import * as React from "react";
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform, StatusBar } from "react-native";

import theme from "../styles/theme.style";
import { navigationRef } from "../utility/RootNavigation";

// Custom Drawer
import DrawerContent from "../components/DrawerContent/DrawerContent.component";

// Screens
import SignIn from "../screens/SignIn";
import Saint from "../screens/Saint";

import Raiders from "../screens/Raiders";
import RickyBobby from "../screens/RickyBobby";
import Spiderman from "../screens/Spiderman";
import TonyStarch from "../screens/TonyStarch";

// Set Status Bar Style
StatusBar.setBarStyle("light-content");

if (Platform.OS !== "ios") {
  StatusBar.setBackgroundColor(theme.PRIMARY_BACKGROUND_COLOR);
}

// Navigation
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerStack = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    initialRouteName="Saint"
  >
    <Drawer.Screen name={"Saint"} component={Saint} />
    <Drawer.Screen name={"Raiders"} component={Raiders} />
    <Drawer.Screen name={"RickyBobby"} component={RickyBobby} />
    <Drawer.Screen name={"TonyStarch"} component={TonyStarch} />
    <Drawer.Screen name={"Spiderman"} component={Spiderman} />
  </Drawer.Navigator>
);

const AppStack = createStackNavigator();
const AppNavigation = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Auth"
  >
    <AppStack.Screen name={"Auth"} component={AuthStackScreen} />
    <AppStack.Screen name={"Home"} component={DrawerStack} />
  </AppStack.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
