import * as React from "react";
import Navigation from "./src/app/navigation";

// Providers
import { Provider as AuthProvider } from "./src/context/AuthContext/AuthContext";
import { Provider as MarketProvider } from "./src/context/MarketSelectorContext/MarketSelectorContext";
import { Provider as PaperProvider } from "react-native-paper";

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
