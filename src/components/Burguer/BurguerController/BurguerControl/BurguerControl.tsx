import React from 'react';/* eslint-disable-line */
import './BurguerControl.sass';

const BurguerControl = ({ label, added, substructed, type, disabled }) => {
	return (
		<div className="BurguerControl">
			{label && <div className="BurguerControl__label">{label}</div>}
			<button
				className="BurguerControl__btn BurguerControl__btn--less"
				disabled={disabled}
				onClick={() => substructed(type)}
			>
				Less
			</button>
			<button
				className="BurguerControl__btn BurguerControl__btn--more"
				onClick={() => added(type)}
			>
				More
			</button>
		</div>
	);
};

export default BurguerControl;
