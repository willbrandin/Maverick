import { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext/AuthContext";

export default () => {
  const { signOut } = useContext(AuthContext);

  const performSignOut = () => {
    signOut();
  };

  return [performSignOut];
};
