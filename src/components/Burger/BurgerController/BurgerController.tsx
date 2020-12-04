import React from 'react'; /* eslint-disable-line */
import Iingredients from '../../../interfaces/ingredients';
import BurguerControl from './BurgerControl/BurgerControl';
import './BurgerController.sass';

interface IBurgerController {
  added: (type: string) => void;
  subtracted: (type: string) => void;
  disabled: Iingredients;
  totalPrice: number;
  purchasable: boolean | undefined;
  ordered: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const BurguerController = ({
  added,
  subtracted,
  disabled,
  totalPrice,
  purchasable,
  ordered,
}: IBurgerController) => {
  const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
  ];

  return (
    <div className="BurguerController">
      <p>
        Current Price: <strong>{totalPrice.toFixed(2)} €</strong>
      </p>
      {controls.map(({ label, type }) => {
        return (
          <BurguerControl
            key={label}
            label={label}
            type={type}
            disabled={disabled[type]}
            added={() => added(type)}
            subtracted={() => subtracted(type)}
          />
        );
      })}
      <button
        className="BurguerController__btn"
        disabled={purchasable}
        onClick={ordered}
      >
        {' '}
        ORDER YOUR BURGUER{' '}
      </button>
    </div>
  );
};

export default BurguerController;
