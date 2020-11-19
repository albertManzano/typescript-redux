import React from 'react';/* eslint-disable-line */
import './Backdrop.sass';

const Backdrop = ({ show, clickBack }) => (show ? <div className="Backdrop" onClick={clickBack} /> : null);

export default Backdrop;
