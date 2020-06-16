/**
 * Actions
 */
import { ACTIONS_TYPES } from "./actions";

export default (state = true, { type }) => {
  switch (type) {
    case ACTIONS_TYPES.LOADING:
      return true;
    case ACTIONS_TYPES.FINISH_LOADING:
      return false;
    default:
      return state;
  }
};
