import React from 'react'; /* eslint-disable-line */
import './Button.sass';

const Button = ({ clicked, children, btnType }) => {
  return (
    <button className={`btn btn--${btnType}`} onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
