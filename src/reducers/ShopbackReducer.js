import { LOAD_ORDER_LIST_SUCCESS, LOAD_ORDER_LIST_ERROR } from 'globalConstants/actions';

const orderReducer = (state={orderList:[], waitingOrders: 0, totalOrders: 0}, action) => {
  switch (action.type) {
    case LOAD_ORDER_LIST_SUCCESS: 
      const { orderList, waitingOrders, totalOrders } = action.payload;
      return { ...state, orderList, waitingOrders, totalOrders}
    case LOAD_ORDER_LIST_ERROR:
      return { ...state, orderList: null, error: action.error}
    default:
      return state;
  }
}

export const orderListSelector = (state) => state.order.orderList;
export const waitingOrdersSelector = (state) => state.order.waitingOrders;
export const totalOrdersSelector = (state) => state.order.totalOrders;

export default orderReducer;