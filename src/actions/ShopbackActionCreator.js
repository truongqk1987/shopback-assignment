export const LOAD_SHOPBACK_DATA = 'LOAD_SHOPBACK_DATA';
export const UPDATE_SELECTED_CATEGORY = 'UPDATE_SELECTED_CATEGORY';

const ShopbackActionCreator = {
  loadShopbackData: (payload) => ({
    type: LOAD_SHOPBACK_DATA,
    payload,
  }),

  updateFirstCategory: (payload) => ({
    type: UPDATE_SELECTED_CATEGORY,
    payload,
  })
}

export default ShopbackActionCreator;