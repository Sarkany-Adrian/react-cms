// @flow
// shared declarations
import { font, baseColors } from './shared';
// theme specific declarations
import theme1Colors from './theme1';
import theme2Colors from './theme2';
import theme3Colors from './theme3';

const siteTheme = {
  theme1: {
    id: 1,
    colors: theme1Colors,
    font,
    baseColors
  },
  theme2: {
    id: 2,
    colors: theme2Colors,
    font,
    baseColors
  },
  theme3: {
    id: 3,
    colors: theme3Colors,
    font,
    baseColors
  }
};

export default siteTheme;
