import IStoreOrderState from '../../interfaces/stores/istore-order-state';
import * as actionTypes from '../actions/actionTypes';
import reducer from './order';
import order from '../../interfaces/order';

describe('order reducer', () => {
  const initialState: IStoreOrderState = {
    orders: [],
    loading: false,
    purchased: false,
  };

  const orderMock: order = {
    country: 'sp',
    deliveryMethod: 'fast',
    email: 'xxxx',
    name: 'pep',
    street: 'pep s',
    zipCode: '14131',
  };

  it('should return initial state if action does not exist', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  it('purchase init should return loading false', () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: true,
        },
        { type: actionTypes.PURCHASE_INIT },
      ),
    ).toStrictEqual({ orders: [], loading: false, purchased: false });
  });
  it('purchase burguer start should return loading true', () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false,
        },
        { type: actionTypes.PURCHASE_BURGUER_START },
      ),
    ).toStrictEqual({
      orders: [],
      loading: true,
      purchased: false,
    });
  });
  it('should concat a new order to the array', () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false,
        },
        {
          orderData: orderMock,
          id: 'id',
        },
      ),
    ).toContain({
      loading: false,
      orders: [{ id: 'id', orderData: orderMock }],
      purchased: false,
    });
  });
});

// switch (action.type) {
//     case actionTypes.PURCHASE_INIT:
//       return purchaseInit(state);
//     case actionTypes.PURCHASE_BURGUER_START:
//       return purchaseStart(state);
//     case actionTypes.PURCHASE_BURGUER_SUCCESS:
//       return purchaseBurguerSuccess(state, action);
//     case actionTypes.FETCH_ORDERS_INIT:
//       return fetchOrdersInit(state);
//     case actionTypes.FETCH_ORDERS_SUCCESS:
//       return fetchOrdersSuccess(state, action);
//     case actionTypes.FETCH_ORDERS_FAILED:
//       return fecthOrdersFailed(state);
//     default:
//       return state;
//   }
