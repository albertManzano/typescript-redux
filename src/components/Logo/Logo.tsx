import React from 'react'; /* eslint-disable-line */
import burguerLogo from '../../assets/images/burgerLogo.png';
import './Logo.sass';
interface ILogo {
  size: boolean;
}
const Logo = ({ size }: ILogo) => {
  return (
    <>
      {size ? (
        <div className="Logo">
          <img className="Logo__image" src={burguerLogo} alt="Burguer Logo" />
        </div>
      ) : (
        <div className="Logo--small">
          <img className="Logo__image" src={burguerLogo} alt="Burguer Logo" />
        </div>
      )}
    </>
  );
};

export default Logo;
