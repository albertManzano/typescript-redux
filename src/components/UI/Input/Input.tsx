import React, { ReactElement } from 'react'; /* eslint-disable-line */
import './Input.sass';

interface input {
  type: string;
  placeholder: string;
}

interface Options {
  options: { value: string; displayValue: string }[];
}

interface IInput {
  elementConfig: Options | JSX.IntrinsicAttributes;
  id: string;
  elementType: string;
  value: string;
  changed: () => void;
  invalid: boolean;
  touched: boolean;
}
const Input = ({
  elementConfig,
  id,
  elementType,
  value,
  changed,
  invalid,
  touched,
}: IInput) => {
  let inputElement: null | ReactElement;
  const red = touched && !invalid;
  switch (elementType) {
    case 'input':
      inputElement = (
        <input
          key={id}
          onChange={changed}
          className={
            red ? 'Input__element Input__element--invalid' : 'Input__element'
          }
          {...elementConfig}
          value={value}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          key={id}
          onChange={changed}
          className="Input__element"
          value={value}
        >
          {elementConfig.options.map(({ value, displayValue }) => (
            <option key={value} value={value}>
              {displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={
            red ? 'Input__element Input__element--invalid' : 'Input__element'
          }
          {...elementConfig}
          value={value}
        />
      );
      break;
  }

  return <div className="Input">{inputElement}</div>;
};

export default Input;
