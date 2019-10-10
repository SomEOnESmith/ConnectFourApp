import React, { Component } from "react";

//react redux
import { connect } from "react-redux";

//react native
import { View, Image } from "react-native";
import { Button } from "native-base";

//actions
import { dropCell, winVertical } from "../redux/actions/board";

class Cell extends Component {
  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevState.elements !== this.props.elements)
  //       console.log(this.props.elements);
  //     this.props.winVertical(this.props.cell);
  //   }
  dropAndCheck = cell => {
    this.props.dropCell(cell);
    this.props.winVertical(cell);
  };

  render() {
    return (
      <Button transparent onPress={() => this.dropAndCheck(this.props.cell)}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../assets/images/connectEmpty.png")}
        />
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    elements: state.reducer.elements
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dropCell: cell => dispatch(dropCell(cell)),
    winVertical: cell => dispatch(winVertical(cell))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cell);
