/**
 * Dependencies
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

/**
 * Reducers
 */
import getResultPage from "./getResultsPage/reducers";
import getAppData from "./appData/reducers";
import propertyData from "./activeProperty/reducers";
import loader from "./loader/reducers";

export default (history) =>
  combineReducers({
    getAppData,
    getResultPage,
    loader,
    propertyData,
    router: connectRouter(history),
  });
