export const ACTIONS_TYPES = {
  LOADING: "IS_LOADING",
  FINISH_LOADING: "FINISH_LOADING",
};

export const isLoading = () => ({
  type: ACTIONS_TYPES.LOADING,
});

export const finisLoading = () => ({
  type: ACTIONS_TYPES.FINISH_LOADING,
});
