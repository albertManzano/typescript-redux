import React from 'react'; /* eslint-disable-line */
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.sass';

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem link="/" active={false}>
        Burguer Constructor
      </NavigationItem>
      <NavigationItem link="/orders" active={false}>
        Orders
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
