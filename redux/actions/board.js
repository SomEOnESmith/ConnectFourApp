import { DROP_CELL } from "./actionTypes";

export const dropCell = cell => {
  return {
    type: DROP_CELL,
    payload: cell
  };
};

// reset = () => {
//   const resetElements = Array.from({ length: 42 }, (_, idx) => {
//     return { id: idx, emptycell: true, color: "" };
//   });
//   this.setState({ elements: resetElements, win: false });
// };

// changeState = cell => {
//   let row = 6;
//   let offset = cell.id + (row - 1) * 7;
//   while (true) {
//     if (this.state.elements[offset].emptycell) {
//       let temp = this.state.elements.find(elem => elem.id === offset);
//       temp.emptycell = !temp.emptycell;
//       if (this.props.player) temp.color = "red";
//       else temp.color = "yellow";

//       this.setState({ elements: [...this.state.elements] });
//       // console.log(this.state.elements[offset]);
//       // console.log(this.winCondetion(this.state.elements[offset]));
//       this.winCondetion(this.state.elements[offset]);
//       break;
//     }
//     row = --row;
//     offset = cell.id + (row - 1) * 7;
//   }
// };

// changeCell = cell => {
//   if (cell.color === "yellow") return <img src={yellow} alt="" height="50px" />;
//   else if (cell.color === "red") return <img src={red} alt="" height="50px" />;
//   else return <img src={empty} alt="" height="50px" />;
// };
