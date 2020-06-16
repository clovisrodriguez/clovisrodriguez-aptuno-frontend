/**
 * Actions
 */
import { ACTIONS_TYPES } from "./actions";

export default (state = {}, { type, payload }) => {
  if (!payload) return state;

  switch (type) {
    case ACTIONS_TYPES.PROPERTY_SUCCESS:
      return payload;
    default:
      return state;
  }
};
