import * as actionTypes from '../actions/actionTypes';
import order from '../../interfaces/order';
import { updateObject } from '../utility';
import IStoreOrderState from '../../interfaces/stores/istore-order-state';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state: IStoreOrderState) => {
  return updateObject(state, { purchased: false });
};

const purchaseStart = (state: IStoreOrderState) => {
  return updateObject(state, { loading: true });
};

const purchaseBurguerSuccess = (
  state: IStoreOrderState,
  action: { orderData: order; id: string },
) => {
  const newOrder: any = updateObject(action.orderData, {
    id: action.id,
  });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });
};

const fetchOrdersInit = (state: IStoreOrderState) => {
  return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (
  state: IStoreOrderState,
  action: { orders: order[] },
) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false,
  });
};

const fecthOrdersFailed = (state: IStoreOrderState) => {
  return updateObject(state, { loading: false });
};

const orderReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state);
    case actionTypes.PURCHASE_BURGUER_START:
      return purchaseStart(state);
    case actionTypes.PURCHASE_BURGUER_SUCCESS:
      return purchaseBurguerSuccess(state, action);
    case actionTypes.FETCH_ORDERS_INIT:
      return fetchOrdersInit(state);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAILED:
      return fecthOrdersFailed(state);
    default:
      return state;
  }
};

export default orderReducer;
