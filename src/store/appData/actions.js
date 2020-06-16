export const ACTIONS_TYPES = {
  GET_PAGE_DATA: "GET_PAGE_DATA",
};

export const getAppData = (payload) => ({
  type: ACTIONS_TYPES.GET_PAGE_DATA,
  payload: payload,
});
