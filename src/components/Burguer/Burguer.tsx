import React from 'react';/* eslint-disable-line */
import './Burguer.sass';
import BurguerIngredients from './BurguerIngredients/BurguerIngredients';

const Burguer = ({ ingredients }) => {
	const tranformedIgredients = Object.keys(ingredients)
		.map((ingreKey) => {
			return [ ...Array(ingredients[ingreKey]) ].map((_, i) => {
				return <BurguerIngredients key={ingreKey + i} type={ingreKey} />;
			});
		})
		.reduce((arr, ele) => {
			return arr.concat(ele);
		}, []);

	return (
		<div className="Burguer">
			<BurguerIngredients type="bread-top" />
			{!tranformedIgredients.length ? <p>Please start adding ingredients</p> : tranformedIgredients}
			<BurguerIngredients type="bread-bottom" />
		</div>
	);
};

export default Burguer;
