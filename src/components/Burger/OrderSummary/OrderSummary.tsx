import React from 'react'; /* eslint-disable-line */
import Button from '../../UI/Button/Button';

const OrderSummary = ({
  ingredients,
  purchaseCancelled,
  purchaseContinue,
  totalPrice,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((ingreKey) => {
    return (
      <li key={ingreKey}>
        <span style={{ textTransform: 'capitalize' }}>
          {ingreKey}: {ingredients[ingreKey]}
        </span>
      </li>
    );
  });

  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with de following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>{totalPrice.toFixed(2)} €</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="danger" clicked={purchaseCancelled}>
        Cancel
      </Button>
      <Button btnType="success" clicked={purchaseContinue}>
        Continue
      </Button>
    </>
  );
};

export default OrderSummary;
