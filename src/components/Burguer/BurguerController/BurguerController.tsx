import React from 'react';/* eslint-disable-line */
import './BurguerController.sass';
import BurguerControl from './BurguerControl/BurguerControl';

const BurguerController = ({ added, substructed, disabled, totalPrice, purchasable, ordered }) => {
	const controls = [
		{ label: 'Salad', type: 'salad' },
		{ label: 'Bacon', type: 'bacon' },
		{ label: 'Cheese', type: 'cheese' },
		{ label: 'Meat', type: 'meat' }
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
						substructed={() => substructed(type)}
					/>
				);
			})}
			<button className="BurguerController__btn" disabled={purchasable} onClick={ordered}>
				{' '}
				ORDER YOUR BURGUER{' '}
			</button>
		</div>
	);
};

export default BurguerController;
