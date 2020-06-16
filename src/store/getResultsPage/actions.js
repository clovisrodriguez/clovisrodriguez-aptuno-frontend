export const ACTIONS_TYPES = {
  GET_RESULTS_BY_PAGE_ID: "GET_RESULTS_BY_PAGE_ID",
  PAGE_RESULTS_SUCCESS: "PAGE_RESULTS_SUCCESS",
};

export const getResultsByPageId = (pageId, filters = {}) => ({
  type: ACTIONS_TYPES.GET_RESULTS_BY_PAGE_ID,
  payload: {pageId, filters},
});

export const pageResultSuccess = (payload) => ({
  type: ACTIONS_TYPES.PAGE_RESULTS_SUCCESS,
  payload: payload,
});
