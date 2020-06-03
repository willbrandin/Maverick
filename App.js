import * as React from "react";
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Platform, StatusBar } from "react-native";

import DrawerContent from "./src/components/DrawerContent/DrawerContent.component";

// Screens
import SignIn from "./src/screens/SignIn";
import Saint from "./src/screens/Saint";
import MarketSelector from "./src/screens/MarketSelector";
import MarketSwitcher from "./src/screens/MarketSwitcher";
import Raiders from "./src/screens/Raiders";
import RickyBobby from "./src/screens/RickyBobby";
import Spiderman from "./src/screens/Spiderman";
import TonyStarch from "./src/screens/TonyStarch";

// Auth Provider

import { Provider as AuthProvider } from "./src/context/AuthContext/AuthContext";
import { Context as AuthContext } from "./src/context/AuthContext/AuthContext";

import { Provider as MarketProvider } from "./src/context/MarketSelectorContext/MarketSelectorContext";
import { Context as MarketContext } from "./src/context/MarketSelectorContext/MarketSelectorContext";
import { Provider as PaperProvider } from "react-native-paper";

// Set Status Bar Style
StatusBar.setBarStyle("light-content");

if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("#0A0617");
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

const MarketSelectorStack = createStackNavigator();
const MarketStackScreen = () => (
  <MarketSelectorStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <AuthStack.Screen name="MarketSelector" component={MarketSelector} />
  </MarketSelectorStack.Navigator>
);

// const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppStackScreen = () => {
  const { state: marketState } = useContext(MarketContext);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Saint"
    >
      <Drawer.Screen name={"Saint"} component={Saint} />
      <Drawer.Screen name={"Raiders"} component={Raiders} />
      <Drawer.Screen name={"RickyBobby"} component={RickyBobby} />
      <Drawer.Screen name={"TonyStarch"} component={TonyStarch} />
      <Drawer.Screen name={"Spiderman"} component={Spiderman} />
      <Drawer.Screen name={"MarketSwitcher"} component={MarketSwitcher} />
    </Drawer.Navigator>
  );
};

const AppNavigation = () => {
  const { state: marketState } = useContext(MarketContext);

  console.log(marketState);

  if (marketState.selectedMarket) {
    return <AppStackScreen />;
  } else {
    return <MarketStackScreen />;
  }
};
// TODO: https://stackoverflow.com/questions/42831685/disable-back-button-in-react-navigation
const Navigation = () => {
  const { state: authState } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {console.log(authState)}

      {authState.token ? <AppNavigation /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <MarketProvider>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </MarketProvider>
    </AuthProvider>
  );
};

export default App;
