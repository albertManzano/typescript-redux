import React from 'react'; /* eslint-disable-line */
import './NavigationItem.sass';

interface INavigationItem {
  link: string;
  children: string;
  active: boolean;
}

const NavigationItem = ({ link, children, active }: INavigationItem) => (
  <li className="NavigationItem">
    <a
      className={
        active ? 'NavigationItem__link--active' : 'NavigationItem__link'
      }
      href={link}
    >
      {children}
    </a>
  </li>
);

export default NavigationItem;
