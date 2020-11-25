import React from 'react'; /* eslint-disable-line */
import './Burguer.sass';
import BurguerIngredients from './BurgerIngredients/BurgerIngredients';
import Iingredients from '../../interfaces/ingredients';

interface IBurger {
  ingredients: Iingredients;
}

const Burger = ({ ingredients }: IBurger) => {
  const transformedIngredients = Object.keys(ingredients)
    .map((ingreKey) => {
      return [...Array(ingredients[ingreKey])].map((_, i) => {
        return <BurguerIngredients key={ingreKey + i} type={ingreKey} />;
      });
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    }, []);

  return (
    <div className="Burguer">
      <BurguerIngredients type="bread-top" />
      {!transformedIngredients.length ? (
        <p>Please start adding ingredients</p>
      ) : (
        transformedIngredients
      )}
      <BurguerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
