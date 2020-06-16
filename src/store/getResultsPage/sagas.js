/**
 * Dependencies
 */
import { put, select, takeEvery } from "redux-saga/effects";

/**
 * Actions
 */
import * as actions from "./actions";
import { isLoading, finisLoading } from "store/loader/actions";

/**
 * Sevices
 */
import { getDataPage } from "./services";

/**
 * Others
 */
import { getAppData } from "./selectors";

function* getData({ payload }) {
  yield put(isLoading());
  const { data } = getAppData(yield select());
  const response = yield getDataPage(data, payload);
  yield put(actions.pageResultSuccess(response));
  yield put(finisLoading());
}

export default function* requestData() {
  yield takeEvery(actions.ACTIONS_TYPES.GET_RESULTS_BY_PAGE_ID, getData);
}
