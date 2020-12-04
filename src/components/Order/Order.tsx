import React from 'react'; /* eslint-disable-line */
import './Order.sass';

const Order = ({ order, price, ingredients }) => {
  interface Ingredients {
    name: string;
    amount: number;
  }
  const ingredientsArray: Ingredients[] = [];
  for (const ingreName in ingredients) {
    ingredientsArray.push({
      name: ingreName,
      amount: ingredients[ingreName],
    });
  }
  debugger
  return (
    <div className="Order" key={order.id}>
      Ingredients:{' '}
      {ingredientsArray.map((ig) => {
        return (
          <span
            style={{
              textTransform: 'capitalize',
              display: 'inline-block',
              margin: '0 8px',
              border: '2px solid #ccc',
              padding: '5px',
            }}
            key={ig.name}
          >
            {ig.name} ({ig.amount})
          </span>
        );
      })}
      <p>
        Price: <strong>€ {price}</strong>
      </p>
    </div>
  );
};

export default Order;
