import { LOAD_ORDER_LIST_SUCCESS, LOAD_ORDER_LIST_ERROR } from 'globalConstants/actions';


const OrderListActionCreator = {
  getOrderListSuccess: (payload) => ({
    type: LOAD_ORDER_LIST_SUCCESS,
    payload,
  }),
  getOrderListError: (error) => ({
    type: LOAD_ORDER_LIST_ERROR,
    error,
  })
}

export default OrderListActionCreator;