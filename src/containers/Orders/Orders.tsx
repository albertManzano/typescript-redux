import React, { useEffect, useState } from 'react'; /* eslint-disable-line */
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const Orders = ({ orders, onFetchOrders, loading }) => {
	useEffect(() => {
		onFetchOrders();
	}, []);

	return (
		<div>
			{loading ? (
				<Spinner />
			) : (
				!!orders &&
				orders.map((order) => <Order key={order.id} ingredients={order.ingredients} price={order.price} />)
			)}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onFetchOrders: () => dispatch(actions.fetchOrders())
	};
};

const mapStateToProps = (state) => {
	return {
		orders: state.order.orders,
		loading: state.order.loading
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
