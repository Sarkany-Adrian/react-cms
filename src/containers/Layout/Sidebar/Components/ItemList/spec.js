import React from 'react';
import { shallow } from 'enzyme';
import ItemList from 'containers/Layout/Sidebar/Components/ItemList';

describe('ItemList component', () => {
  it('Should render the ItemList component', () => {
    const wrapper = shallow(<ItemList />);
    expect(wrapper.find('Link').exists()).toBe(true);
  });
});
