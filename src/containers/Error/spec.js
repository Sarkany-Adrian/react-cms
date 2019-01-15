import React from 'react';
import { shallow } from 'enzyme';

import Error from 'containers/Error';

describe('Error container', () => {
  it('should render the error container', () => {
    const wrapper = shallow(<Error />);
    expect(wrapper.equals(<div>error page</div>));
  });
});
