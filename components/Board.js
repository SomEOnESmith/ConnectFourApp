import React from "react";
import { Container, Grid, Header } from "native-base";
import { connect } from "react-redux";
import Column from "./Column";

const Board = props => {
  const components = [
    props.elements.slice(0, 6),
    props.elements.slice(6, 12),
    props.elements.slice(12, 18),
    props.elements.slice(18, 24),
    props.elements.slice(24, 30),
    props.elements.slice(30, 36),
    props.elements.slice(36, 42)
  ];

  const columnArray = components.map((col, index) => {
    return <Column key={index} col={col} />;
  });
  return (
    <Container>
      <Header />
      <Grid style={{ margin: 30, marginTop: 220 }}>{columnArray}</Grid>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    elements: state.reducer.elements
  };
};

export default connect(mapStateToProps)(Board);
