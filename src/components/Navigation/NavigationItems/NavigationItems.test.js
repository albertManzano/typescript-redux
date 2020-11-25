import React from 'react'; /* eslint-disable-line */

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it('should exist', () => {
    expect(wrapper.html()).toBeDefined();
  });
  it('should render two <NavigationItem /> ', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  it('should render always', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
