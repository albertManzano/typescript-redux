import React,{ useEffect, useState } from 'react'; /* eslint-disable-line */
import { connect } from 'react-redux';
import Burguer from '../../components/Burger/Burger';
import BurgerController from '../../components/Burger/BurgerController/BurgerController';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actionTypes from '../../store/actions';
import Iingredients from '../../interfaces/ingredients';
import Iingredient from '../../interfaces/ingredient';
import { History } from 'history';

interface IBurgerConstructor {
  error: boolean;
  totalPrice: number;
  history: History;
  ingredients: Iingredients;
  purchased: boolean;
  loading: boolean;
  onInitPurchased: () => boolean;
  onIngredientAdded: () => Iingredient;
  onIngredientRemoved: () => Iingredient;
  onLoadIngredients: () => Iingredients | boolean;
  onResetIngredients: () => null;
}

const BurgerConstructor = ({
  loading,
  error,
  totalPrice,
  history,
  ingredients,
  onInitPurchased,
  onIngredientAdded,
  onIngredientRemoved,
  onLoadIngredients,
  onResetIngredients,
}: IBurgerConstructor) => {
  let disabledInfo = { ...ingredients };
  const [, setDisabled] = useState(disabledInfo);
  const [purchasable, setIsPurchasable] = useState<boolean>(false);
  const [purchasing, setPurchasing] = useState<boolean>(false);

  useEffect(() => {
    onResetIngredients();
    setIsPurchasable(false);
    setPurchasing(false);
    onLoadIngredients();
  }, [onLoadIngredients, onResetIngredients]);

  useEffect(() => {
    if (ingredients) {
      disabledInfo = { ...ingredients };
      for (const key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
      setDisabled(disabledInfo);
      const checkPruchasable = { ...ingredients };
      const sum = Object.keys(ingredients)
        .map((ingreKey) => {
          return checkPruchasable[ingreKey];
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);
      const isPurchasable = sum <= 0;
      if (isPurchasable) setIsPurchasable(!purchasable);
    }
  }, [ingredients]);

  const purchaseHandler = () => setPurchasing(!purchasing);

  const purchaseCancelHandler = () => setPurchasing(!purchasing);

  const purchaseContinueHandle = () => {
    onInitPurchased();
    history.push({ pathname: '/checkout' });
  };

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {ingredients &&
          Object.values(ingredients).every((ele) => ele >= 0) &&
          !error && (
            <OrderSummary
              totalPrice={totalPrice}
              ingredients={ingredients}
              purchaseCancelled={purchaseCancelHandler}
              purchaseContinue={purchaseContinueHandle}
            />
          )}
      </Modal>
      {!ingredients && error ? (
        <p>Ingredients can not be loaded!</p>
      ) : !loading &&
        ingredients &&
        Object.values(ingredients).every((ele) => ele >= 0) &&
        !error ? (
        <>
          <Burguer ingredients={ingredients} />
          <BurgerController
            purchasable={purchasable}
            added={onIngredientAdded}
            subtracted={onIngredientRemoved}
            disabled={disabledInfo}
            totalPrice={totalPrice}
            ordered={purchaseHandler}
          />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

const mapStateToProps = (state: {
  burguerConstructor: {
    ingredients: Iingredients | null;
    totalPrice: number;
    error: boolean;
    loading: boolean;
  };
  order: { purchased: boolean };
}) => {
  return {
    ingredients: state.burguerConstructor.ingredients,
    totalPrice: state.burguerConstructor.totalPrice,
    error: state.burguerConstructor.error,
    purchased: state.order.purchased,
    loading: state.burguerConstructor.loading,
  };
};

const mapDispacthToProps = (dispatch: any) => {
  return {
    onIngredientAdded: (ingredient: string) =>
      dispatch(actionTypes.addIngredient(ingredient)),
    onIngredientRemoved: (ingredient: string) =>
      dispatch(actionTypes.removeIngredient(ingredient)),
    onLoadIngredients: () => dispatch(actionTypes.loadIngredients()),
    onInitPurchased: () => dispatch(actionTypes.purchaseInit()),
    onResetIngredients: () => dispatch(actionTypes.resetIngredients()),
  };
};

export default connect(mapStateToProps, mapDispacthToProps)(BurgerConstructor);
