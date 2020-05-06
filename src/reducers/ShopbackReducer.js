import { LOAD_SHOPBACK_DATA, UPDATE_SELECTED_CATEGORY, LOAD_SHOPBACK_DATA_SUCCESSFUL, LOAD_SHOPBACK_DATA_FAILED } from 'actions/ShopbackActionCreator';

const shopbackReducer = (state={}, action) => {
  switch (action.type) {
    case LOAD_SHOPBACK_DATA: 
      return { ...state }
    case LOAD_SHOPBACK_DATA_SUCCESSFUL: 
      const { categories = [], stores = []} = action.payload;
      return { ...state, categories, stores }
    case LOAD_SHOPBACK_DATA_FAILED: 
      return { ...state }
    case UPDATE_SELECTED_CATEGORY:
      return { ...state }
    default:
      return state;
  }
}

export const categoriesSelector = (state) => state.shopback.categories;
export const storesSelector = (state) => state.shopback.stores;

export default shopbackReducer;