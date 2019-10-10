import {
  // CHANGE_PLAYER,
  DISPLAY_WINNER,
  DROP_CELL,
  CHANGE_CELL,
  RESET_BOARD,
  WIN_VERTICAL
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
    case WIN_VERTICAL:
      const verCell = payload;
      let bottomCell = verCell.id - (verCell.id % 6) + 5;
      let counter = 0;
      let count = 0;
      let color = "";
      state.player ? (color = "yellow") : (color = "red");
      while (count < 6) {
        if (color === state.elements[bottomCell - count].color) {
          counter++;
          if (counter === 4) {
            return {
              ...state,
              win: true
            };
          }
        } else counter = 0;
        count++;
      }
      return { ...state };
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
        }
        offset -= 1;
        row = top + offset;
        if (row === top - 1) {
          break;
        }
      }
    case CHANGE_CELL:
      return { ...state, ...payload };
    case RESET_BOARD:
      return { ...state, ...payload };
    default:
      return state;
  }
};
