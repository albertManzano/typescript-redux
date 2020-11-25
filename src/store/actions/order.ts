import * as actionTypes from './actionTypes';
import api from '../../api';
import { Dispatch } from 'redux';
import Order from '../../interfaces/order';

export const purchaseBurguerSuccess = (id: string, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGUER_SUCCESS,
    id,
    orderData,
  };
};

export const purchaseBurguerFailed = (error: Error) => {
  return {
    type: actionTypes.PURCHASE_BURGUER_FAILED,
    error,
  };
};

export const purchaseBurguerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGUER_START,
  };
};

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const purchaseBuguer = (orderData) => {
  return (dispatch: Dispatch) => {
    dispatch(purchaseBurguerStart());
    api
      .post('/orders.json', orderData)
      .then(({ data }) => {
        dispatch(purchaseBurguerSuccess(data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchaseBurguerFailed(error));
      });
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders,
  };
};

export const fetchOrdersFailed = (error: string) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAILED,
    error,
  };
};

export const fetchOrdersInit = () => {
  return {
    type: actionTypes.FETCH_ORDERS_INIT,
  };
};

export const fetchOrders = () => {
  return (dispatch) => {
    dispatch(fetchOrdersInit());
    api
      .get('/orders.json')
      .then(({ data }) => {
        const fetchedOrders = new Array<Order>();
        for (let key in data) {
          fetchedOrders.push({
            ...data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders));
      })
      .catch((error: string) => {
        dispatch(fetchOrdersFailed(error));
      });
  };
};
