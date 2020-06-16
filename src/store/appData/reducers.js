/**
 * Dependencies
 */
import _ from "lodash";

/**
 * Actions
 */
import { ACTIONS_TYPES } from "./actions";

export default (state = [], { type, payload }) => {
  switch (type) {
    case ACTIONS_TYPES.GET_PAGE_DATA:
      return {
        data: payload,
        regions: _.uniq(_.flatten(_.map(payload, "regions"), true)).sort(),
        bedrooms: _.uniq(_.map(payload, "bedrooms")).sort(),
      };
    default:
      return state;
  }
};
