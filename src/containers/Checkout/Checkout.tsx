import React, { useEffect } from 'react'; /* eslint-disable-line */
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import * as actionTypes from '../../store/actions/index';
import ingredients from '../../interfaces/ingredients';
import ContactData from './ContactData/ContactData';
import { History } from 'history';

interface ICheckout {
  onInitPurchase: () => boolean;
  history: History;
  match;
  ingredients: ingredients;
  onLoadIngredients: () => ingredients;
  purchased: boolean;
}

const Checkout = ({
  onInitPurchase,
  history,
  match,
  ingredients,
  onLoadIngredients,
  purchased,
}: ICheckout) => {
  const purchaseCancelled = () => {
    onLoadIngredients();
    history.goBack();
  };

  const purchaseContinue = () => history.replace('/checkout/contact-data');

  useEffect(() => {
    onInitPurchase();
  }, [onInitPurchase]);

  return (
    <div>
      {ingredients && Object.values(ingredients).every((ele) => ele >= 0) ? (
        <>
          {purchased ? <Redirect to="/" /> : null}
          <CheckoutSummary
            purchaseCancelled={purchaseCancelled}
            purchaseContinue={purchaseContinue}
            ingredients={ingredients}
          />
          <Route path={match.path + '/contact-data'} component={ContactData} />{' '}
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

const mapStateToProps = (state: {
  burguerConstructor: { ingredients: ingredients; totalPrice: number };
  order: { purchased: boolean };
}) => {
  return {
    ingredients: state.burguerConstructor.ingredients,
    totalPrice: state.burguerConstructor.totalPrice,
    purchased: state.order.purchased,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onInitPurchase: () => dispatch(actionTypes.purchaseInit),
    onLoadIngredients: () => dispatch(actionTypes.loadIngredients),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
