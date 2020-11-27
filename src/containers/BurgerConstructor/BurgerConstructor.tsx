/*eslint prefer-const: ["error", {"destructuring": "all"}]*/
import React,{ useEffect, useState , useRef} from 'react'; /* eslint-disable-line */
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
  onLoadIngredients: any;
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
  const [disabledInfo, setDisabled] = useState<Iingredients>({
    ...ingredients,
  });
  const purchasable = useRef(false);
  const [, setIsPurchasable] = useState<boolean>(purchasable.current);
  const [purchasing, setPurchasing] = useState<boolean>(false);

  useEffect(() => {
    onResetIngredients();
    onLoadIngredients();
  }, [onResetIngredients, onLoadIngredients]);

  useEffect(() => {
    if (ingredients) {
      const _disabledInfo = { ...disabledInfo, ...ingredients };
      for (const key in _disabledInfo) {
        _disabledInfo[key] = _disabledInfo[key] <= 0;
      }
      setDisabled((_disabledInfo) => _disabledInfo);
      const checkPruchasable = { ...ingredients };
      const sum = Object.keys(ingredients)
        .map((ingreKey) => {
          return checkPruchasable[ingreKey];
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);
      setIsPurchasable((purchasable.current = sum <= 0));
    }
  }, [ingredients, disabledInfo]);

  const purchaseHandler = () => setPurchasing(!purchasing);

  const purchaseCancelHandler = () => setPurchasing(purchasing);

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
            purchasable={purchasable.current}
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
