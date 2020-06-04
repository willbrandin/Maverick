import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";

const animation = require("../../../assets/img/loader/laundry-animation.json");

const Loader = ({ play, children }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        height: 100,
        justifyContent: "center",
        // backgroundColor: "rgba(0, 0, 0, 1)",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            // alignItems: "center",
            // justifyContent: "center",
            // position: "absolute",
            // left: 0,
            // top: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </View>
        {play ? (
          <LottieView
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
            source={animation}
            autoPlay
            loop
          />
        ) : null}
      </View>
    </View>
  );
};

export default Loader;
