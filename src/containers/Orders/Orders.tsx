import React, { useEffect } from 'react'; /* eslint-disable-line */
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import order from '../../interfaces/order';
import Iingredients from '../../interfaces/ingredients';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

interface IOrders {
  orders:
    | [
        {
          order: {
            id: string;
            price: number;
            ingredients: Iingredients;
          };
        },
      ]
    | [];
  onFetchOrders: () => order[] | [];
  loading: boolean;
}

interface IOrderMap {
  order: {
    id: string;
    price: number;
    ingredients: Iingredients;
  };
  price: number;
  ingredients: Iingredients;
}

const Orders = ({ orders, onFetchOrders, loading }: IOrders) => {
  useEffect(() => {
    onFetchOrders();
  }, [onFetchOrders]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        !!orders &&
        (orders as Array<IOrderMap>).map((order) => (
          // eslint-disable-next-line react/jsx-key
          <Order
            order={order}
            ingredients={order.ingredients}
            price={order.price.toFixed(2)}
          />
        ))
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
