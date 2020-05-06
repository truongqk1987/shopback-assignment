import { LOAD_SHOPBACK_DATA, UPDATE_SELECTED_CATEGORY } from 'actions/ShopbackActionCreator';

const shopbackReducer = (state={}, action) => {
  switch (action.type) {
    case LOAD_SHOPBACK_DATA: 
      return { ...state }
    case UPDATE_SELECTED_CATEGORY:
      return { ...state }
    default:
      return state;
  }
}

export default shopbackReducer;