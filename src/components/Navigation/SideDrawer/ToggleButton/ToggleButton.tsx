import React from 'react'; /* eslint-disable-line */

const ToggleButton = ({ clicked }) => {
	return (
		<div className="Navigator--desktop Navigator__menu" onClick={clicked}>
			<div className="Navigator__menu--line" />
			<div className="Navigator__menu--line" />
			<div className="Navigator__menu--line" />
		</div>
	);
};

export default ToggleButton;
