// changePlayer = () => {
//   const newplayer = !this.state.player;
//   this.setState({
//     player: newplayer
//   });
// };

// winner = () => {
//   if (this.state.win) {
//     if (this.props.player) {
//       return (
//         <>
//           <h1>The winner is Player 1</h1>
//           <button className="btn btn-warning mb-3" onClick={() => this.reset()}>
//             Play again
//           </button>
//         </>
//       );
//     }
//     return (
//       <>
//         <h1>The winner is Player 2</h1>
//         <button className="btn btn-warning mb-3" onClick={() => this.reset()}>
//           Play again
//         </button>
//       </>
//     );
//   }
// };

// winCondition = cell => {
//   let index = parseInt(cell.id / 7);
//   index = index * 7;
//   let counter = 0;
//   let count = 0;
//   while (count < 7) {
//     if (cell.color === this.state.elements[index + count].color) {
//       counter++;
//       if (counter === 4) {
//         this.setState({
//           win: true
//         });
//         return cell.color;
//       }
//     } else {
//       counter = 0;
//     }
//     count++;
//   }
//   count = 0;
//   index = cell.id - parseInt(cell.id / 7) * 7 + 35;
//   counter = 0;
//   while (count < 6) {
//     if (cell.color === this.state.elements[index - 7 * count].color) {
//       counter++;
//       if (counter === 4) {
//         this.setState({
//           win: true
//         });
//         break;
//       }
//     } else {
//       counter = 0;
//     }
//     count++;
//   }
// };
