import React from 'react';/* eslint-disable-line */

import './BurguerIngredients.sass';

const BurguerIngredients = ({ type }: { type: string }) => {
	let ingredient: JSX.Element | null;

	switch (type) {
		case 'bread-bottom':
			ingredient = <div className="Bread-Bottom" />;
			break;
		case 'bread-top':
			ingredient = (
				<div className="Bread-Top">
					<div className="Seeds1" />
					<div className="Seeds2" />
				</div>
			);
			break;
		case 'meat':
			ingredient = <div className="Meat" />;
			break;
		case 'cheese':
			ingredient = <div className="Cheese" />;
			break;
		case 'bacon':
			ingredient = <div className="Bacon" />;
			break;
		case 'salad':
			ingredient = <div className="Salad" />;
			break;
		default:
			ingredient = null;
	}

	return ingredient;
};

export default BurguerIngredients;
