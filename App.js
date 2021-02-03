import * as React from "react";
import { useFonts } from "expo-font";

import Navigation from "./src/app/navigation";

// Providers
import { Provider as AuthProvider } from "./src/context/AuthContext/AuthContext";
import { Provider as PaperProvider } from "react-native-paper";
import AppLoading from "expo-app-loading";

// As of June 9th 2020, Hiding Market context. For now this will be SAINT wide data.
// No Market specifics.

const App = () => {
  let [fontsLoaded] = useFonts({
    "Gotham-Bold": require("./ios/Fonts/Gotham-Bold.otf"),
    "Gotham-Book": require("./ios/Fonts/Gotham-Book.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AuthProvider>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </AuthProvider>
    );
  }
};

export default App;
