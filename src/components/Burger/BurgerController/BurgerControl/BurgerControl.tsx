import React from 'react'; /* eslint-disable-line */
import './BurgerControl.sass';

interface IBurgerControl {
  label: string;
  type: string;
  added: (type: string) => void;
  subtracted: (type: string) => void;
  disabled: boolean;
}

const BurguerControl = ({
  label,
  added,
  subtracted,
  type,
  disabled,
}: IBurgerControl) => {
  return (
    <div className="BurguerControl">
      {label && <div className="BurguerControl__label">{label}</div>}
      <button
        className="BurguerControl__btn BurguerControl__btn--less"
        disabled={disabled}
        onClick={() => subtracted(type)}
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
