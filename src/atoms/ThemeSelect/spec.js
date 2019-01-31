import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import toJson from 'enzyme-to-json';
import ThemeSelect from 'atoms/ThemeSelect';
import siteTheme from 'themes/siteTheme';

jest.mock('contexts/theme', () => {
  const context = {
    theme: { name: 'test_theme' },
    handleThemeChange: jest.fn()
  };

  console.log('here', context);

  return {
    SiteThemeContext: {
      Consumer: props => props.children(context)
    }
  };
});

describe('Theme Select Atom', () => {
  // const shallowWithTheme = (tree, theme) => {
  //   const context = shallow(<ThemeProvider theme={theme} />)
  //     .instance()
  //     .getChildContext();
  //   return shallow(tree, { context });
  // };

  const context = {
    theme: siteTheme.theme1
  };

  beforeEach(() => {
    jest.resetModules();
  });

  it('should render and match snapshot', () => {
    const wrapper = shallow(<ThemeSelect />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should trigger handleThemeChange on select', () => {
    // const outer = mount(<ThemeSelect />);

    // const Children = outer.props().children({ theme });
    // const wrapper = shallow(Children);
    //
    // wrapper
    //   .dive()
    //   .find('select')
    //   .simulate('change');
    //
    // expect(handleThemeChange).toHaveBeenCalled();

    // const wrapper = shallowWithTheme(<ThemeSelect />, theme);
    //
    // console.log(wrapper.debug());
    // const ThemeSelectComp = getLanguageSelectorWithContext();
    const wrapper = mount(
      <ThemeProvider
        theme={context.theme}
        handleThemeChange={context.handleThemeChange}
      >
        <ThemeSelect />
      </ThemeProvider>
    );

    const select = wrapper.find('select');

    console.log(select.debug());

    select.simulate('change');

    console.log('longshot', context);

    expect(context.handleThemeChange).toHaveBeenCalled();

    // expect(select).toHaveLength(1);
  });
});
