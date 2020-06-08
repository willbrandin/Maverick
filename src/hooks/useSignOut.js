import { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext/AuthContext";
import { Context as MarketContext } from "../context/MarketSelectorContext/MarketSelectorContext";

import * as RootNavigation from "../utility/RootNavigation";

export default () => {
  const { signOut } = useContext(AuthContext);
  const { setEmptyMarkets } = useContext(MarketContext);

  const performSignOut = () => {
    signOut();
    setEmptyMarkets();
  };

  return [performSignOut];
};
