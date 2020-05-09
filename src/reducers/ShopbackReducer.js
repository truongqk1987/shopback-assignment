import { UPDATE_FIRST_CATEGORY, LOAD_SHOPBACK_DATA_SUCCESSFUL, LOAD_SHOPBACK_DATA_FAILED } from 'actions/ShopbackActionCreator';

export const INITIAL_STATE = {
  firstCategoryId: -1
};

const shopbackReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_SHOPBACK_DATA_SUCCESSFUL: 
      const { categories = [], stores = []} = action.data;
      return { ...state, categories, stores }
    case LOAD_SHOPBACK_DATA_FAILED: 
      return { ...state, error: action.error }
    case UPDATE_FIRST_CATEGORY:
      return { ...state, firstCategoryId: action.payload.id }
    default:
      return state;
  }
}

export const categoriesSelector = (state) => state.shopback.categories;
export const storesSelector = (state) => state.shopback.stores;

export default shopbackReducer;