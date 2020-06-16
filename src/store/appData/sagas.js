/**
 * Dependencies
 */
import { call, put } from "redux-saga/effects";

/**
 * Actions
 */
import * as actions from "./actions";
import { isLoading, finisLoading } from "store/loader/actions";

/**
 * Services
 */
import { getAppData } from "./services";

export default function* getDataSet() {
  try {
    const response = yield call(getAppData);
    yield put(isLoading());
    yield put(actions.getAppData(response.data.data));
    yield put(finisLoading());
  } catch (error) {
    console.log(`Request-failed: ${error}`);
  }
}
