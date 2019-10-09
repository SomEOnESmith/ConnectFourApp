import React from "react";

//react redux
import { connect } from "react-redux";

//react native
import { View, Image } from "react-native";
import { Button } from "native-base";

//actions
import { dropCell } from "../redux/actions/board";

const Cell = props => {
  return (
    <View>
      <Button transparent onPress={() => props.dropCell(props.cell)}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/connectEmpty.png")}
        />
      </Button>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dropCell: cell => dispatch(dropCell(cell))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Cell);
