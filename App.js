import * as React from "react";
import Navigation from "./src/app/navigation";

// Providers
import { Provider as AuthProvider } from "./src/context/AuthContext/AuthContext";
import { Provider as PaperProvider } from "react-native-paper";

// As of June 9th 2020, Hiding Market context. For now this will be SAINT wide data.
// No Market specifics.

const App = () => {
  return (
    <AuthProvider>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </AuthProvider>
  );
};

export default App;
