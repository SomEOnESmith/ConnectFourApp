import {
  CHANGE_PLAYER,
  WIN_CONDITION,
  DISPLAY_WINNER,
  DROP_CELL,
  CHANGE_CELL,
  RESET_BOARD
} from "../actions/actionTypes";

const initialState = {
  player: 1,
  win: false,
  elements: Array.from({ length: 42 }, (_, idx) => {
    return { id: idx, emptycell: true, color: "" };
  })
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_PLAYER:
      return { ...state, ...payload };
    case WIN_CONDITION:
      return { ...state, ...payload };
    case DISPLAY_WINNER:
      return { ...state, ...payload };
    case DROP_CELL:
      return { ...state, ...payload };
    case CHANGE_CELL:
      return { ...state, ...payload };
    case RESET_BOARD:
      return { ...state, ...payload };
    default:
      return state;
  }
};
