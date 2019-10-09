import React from "react";
import { View, Image } from "react-native";

const Cell = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../assets/images/connectEmpty.png")}
    />
  );
};

export default Cell;
