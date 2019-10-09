import React, { Component } from "react";

import Cell from "./Cell.js";
import { View } from "react-native";
import { Row, Text } from "native-base";

const Column = props => {
  let cells = props.col.map(cell => {
    return (
      <Row style={{ flex: 0 }} key={cell.id}>
        <Cell key={cell.id} cell={cell} />
      </Row>
    );
  });
  return <View>{cells}</View>;
};

export default Column;
