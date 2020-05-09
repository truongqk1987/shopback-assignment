export const LOAD_SHOPBACK_DATA = 'LOAD_SHOPBACK_DATA';
export const LOAD_SHOPBACK_DATA_SUCCESSFUL = 'LOAD_SHOPBACK_DATA_SUCCESSFUL';
export const LOAD_SHOPBACK_DATA_FAILED = 'LOAD_SHOPBACK_DATA_FAILED';

export const UPDATE_FIRST_CATEGORY = 'UPDATE_FIRST_CATEGORY';

export const loadShopbackData = (payload) => ({
  type: LOAD_SHOPBACK_DATA,
  payload,
});

export const updateFirstCategory = (payload) => ({
  type: UPDATE_FIRST_CATEGORY,
  payload,
});
