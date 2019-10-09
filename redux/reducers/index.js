import {
  // CHANGE_PLAYER,
  WIN_CONDITION,
  DISPLAY_WINNER,
  DROP_CELL,
  CHANGE_CELL,
  RESET_BOARD
} from "../actions/actionTypes";

const initialState = {
  player: false,
  win: false,
  elements: Array.from({ length: 42 }, (_, idx) => {
    return { id: idx, emptycell: true, color: "" };
  })
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // case CHANGE_PLAYER:
    //   return { ...state, ...payload };
    case WIN_CONDITION:
      return { ...state, ...payload };
    case DISPLAY_WINNER:
      return { ...state, ...payload };
    case DROP_CELL:
      const cell = payload;
      const top = cell.id - (cell.id % 6);
      let offset = 5;
      let row = top + offset;
      let newPlayer;
      let temp;
      while (true) {
        if (state.elements[row].emptycell) {
          temp = state.elements.find(elem => elem.id === row);
          temp.emptycell = !temp.emptycell;
          if (state.player) temp.color = "red";
          else temp.color = "yellow";
          newPlayer = !state.player;
          return { ...state, elements: [...state.elements], player: newPlayer };
          // console.log(this.winCondition(this.state.elements[row]));
        }
        console.log("TCL: elements[row]", state.elements[row]);
        offset -= 1;
        row = top + offset;
        if (row === top - 1) {
          break;
        }
        // this.winCondition(this.state.elements[row]); ===> I think this will be in ComponentDidUpdate
      }
    case CHANGE_CELL:
      return { ...state, ...payload };
    case RESET_BOARD:
      return { ...state, ...payload };
    default:
      return state;
  }
};
