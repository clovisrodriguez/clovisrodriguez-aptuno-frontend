/**
 * Dependencies
 */
import { all, fork } from "redux-saga/effects";

/**
 * Sagas
 */
import getDataSet from "./appData/sagas";
import getPageData from "./getResultsPage/sagas";
import propertyData from "./activeProperty/sagas";

export default function* rootSaga() {
  yield all([fork(getDataSet)]);
  yield all([fork(getPageData)]);
  yield all([fork(propertyData)]);
}
