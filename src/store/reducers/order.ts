import * as actionTypes from '../actions/actionTypes';
import { Order } from '../system/index';
import { updateObject } from '../utility';

const initialState = {
	orders: [],
	loading: false,
	purchased: false
};

const purchaseInit = (state, action) => {
	return updateObject(state, { purchased: false });
};

const purchaseStart = (state, action) => {
	return updateObject(state, { loading: true });
};

const purchaseBurguerSuccess = (state, action) => {
	const newOrder: any = updateObject(action.orderData, {
		id: action.id
	});

	return updateObject(state, {
		loading: false,
		purchased: true,
		orders: state.orders.concat(newOrder)
	});
};

const fetchOrdersInit = (state, action) => {
	return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
	return updateObject(state, {
		orders: action.orders,
		loading: false
	});
};

const fecthOrdersFailed = (state, action) => {
	return updateObject(state, { loading: false });
};

const orderReducer = (
	state = initialState,
	action: { type: string; id: string; orderData: ConcatArray<object>; orders: Array<Order> }
) => {
	switch (action.type) {
		case actionTypes.PURCHASE_INIT:
			return purchaseInit(state, action);
		case actionTypes.PURCHASE_BURGUER_START:
			return purchaseStart(state, action);
		case actionTypes.PURCHASE_BURGUER_SUCCESS:
			return purchaseBurguerSuccess(state, action);
		case actionTypes.FETCH_ORDERS_INIT:
			return fetchOrdersInit(state, action);
		case actionTypes.FETCH_ORDERS_SUCCESS:
			return fetchOrdersSuccess(state, action);
		case actionTypes.FETCH_ORDERS_FAILED:
			return fecthOrdersFailed(state, action);
		default:
			return state;
	}
};

export default orderReducer;
