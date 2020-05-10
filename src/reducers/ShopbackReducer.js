import { UPDATE_FIRST_CATEGORY, LOAD_SHOPBACK_DATA_SUCCESSFUL, LOAD_SHOPBACK_DATA_FAILED } from 'actions/ShopbackActionCreator';

import { sortCategoryByHistory } from 'utils';

export const INITIAL_STATE = {
  firstCategory: null
};

const shopbackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_SHOPBACK_DATA_SUCCESSFUL: 
      const { categories = [], stores = []} = action.data;
      return { ...state, categories: sortCategoryByHistory(categories), stores }
    case LOAD_SHOPBACK_DATA_FAILED: 
      return { ...state, error: action.error }
    case UPDATE_FIRST_CATEGORY:
      localStorage.setItem('first-category', JSON.stringify(action.payload));
      return { ...state, firstCategory: action.payload }
    default:
      return state;
  }
}

export const categoriesSelector = (state) => state.shopback.categories;
export const storesSelector = (state) => state.shopback.stores;
export default shopbackReducer;