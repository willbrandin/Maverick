import * as React from "react";
import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

// Screens
import SignIn from "./src/screens/SignIn";
import Home from "./src/screens/Home";
import MarketSelector from "./src/screens/MarketSelector";

// Auth Provider

import { Provider as AuthProvider } from "./src/context/AuthContext/AuthContext";
import { Context as AuthContext } from "./src/context/AuthContext/AuthContext";

import { Provider as MarketProvider } from "./src/context/MarketSelectorContext/MarketSelectorContext";
import { Context as MarketContext } from "./src/context/MarketSelectorContext/MarketSelectorContext";

// Set Status Bar Style
StatusBar.setBarStyle("light-content");

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

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  const { state: marketState } = useContext(MarketContext);

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={marketState.selectedMarket.marketName}
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "#0A0617",
            shadowColor: "transparent",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          borderBottomWidth: 0,
        }}
      />
    </AppStack.Navigator>
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
        <Navigation />
      </MarketProvider>
    </AuthProvider>
  );
};

export default App;
