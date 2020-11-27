import React from 'react'; /* eslint-disable-line */
import Iingredients from '../../../interfaces/ingredients';
import Burguer from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.sass';

interface IInterface {
  ingredients: Iingredients;
  purchaseCancelled: () => void;
  purchaseContinue: () => void;
}

const CheckoutSummary = ({
  ingredients,
  purchaseCancelled,
  purchaseContinue,
}: IInterface) => {
  return (
    <div className="CheckoutSummary">
      {ingredients ? (
        <>
          <h1>We hope you enjoy!</h1>
          <div className="CheckoutSummary__BurguerContainer">
            <Burguer ingredients={ingredients} />
          </div>
          <Button btnType="danger" clicked={purchaseCancelled}>
            Cancel
          </Button>
          <Button btnType="success" clicked={purchaseContinue}>
            Continue
          </Button>
        </>
      ) : null}
    </div>
  );
};

export default CheckoutSummary;
