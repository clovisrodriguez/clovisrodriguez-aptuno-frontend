export const ACTIONS_TYPES = {
  GET_PROPERTY_DATA_BY_ID: "GET_PROPERTY_DATA_BY_ID",
  PROPERTY_SUCCESS: "PROPERTY_SUCCESS"
};

export const getPageByPropertyId = (propertyId) => ({
  type: ACTIONS_TYPES.GET_PROPERTY_DATA_BY_ID,
  payload: propertyId,
});

export const pageResultSuccess = (payload) => ({
  type: ACTIONS_TYPES.PROPERTY_SUCCESS,
  payload: payload,
});
