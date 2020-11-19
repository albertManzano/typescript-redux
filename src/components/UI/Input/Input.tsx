import React, { ReactElement } from 'react'; /* eslint-disable-line */
import './Input.sass';

const Input = ({ pattern,elementConfig, id, elementType, value, changed, invalid, touched}) => {
	let inputElement: null | ReactElement;
	const red = touched && !invalid 
	switch (elementType) {
		case 'input':
			inputElement = (
				<input pattern={pattern} key={id} onChange={ changed}  className={red ? "Input__element Input__element--invalid": "Input__element"} {...elementConfig} value={value} />
			);
			break;
		// case 'textarea':
		// 	inputElement = (
		// 		<textarea key={id} onChange={changed} className={red ? "Input__element Input__element--invalid": "Input__element"} {...elementConfig} value={value} />
		// 	);
			// break;
		case 'select':
			inputElement = (
				<select key={id} onChange={changed} className= "Input__element" value={value}>
					{elementConfig.options.map((item) => (<option key={item.value} value={item.value}>{item.displayValue}</option>))}
				</select>
			);
			break;
		default:
			inputElement = <input className={red ? "Input__element Input__element--invalid": "Input__element" } {...elementConfig} value={value} />;
			break;
	}
	
	return (
		<div  className="Input">
			{inputElement}
		</div>
	);
};

export default Input;
