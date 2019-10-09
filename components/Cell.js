import React from "react";
import { View, Image } from "react-native";

const Cell = () => {
  return (
    <View>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/images/connectEmpty.png")}
      />
    </View>
  );
};

export default Cell;
