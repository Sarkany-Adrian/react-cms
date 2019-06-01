// @flow
import React, { PureComponent } from 'react';
import onClickOutside from 'react-onclickoutside';
import cx from 'classnames';

// components
import Button from 'atoms/Button';

// style
import './style.scss';

// fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// types
type Props = {
  isOpen: boolean,
  toggleOffsidebar: () => void,
  HOCtoggleOffsidebar: boolean => void
};

/**
 *
 */
export class Offsidebar extends PureComponent<Props> {
  /**
   * Used by on click outside wrapper
   */
  handleClickOutside = () => {
    const { HOCtoggleOffsidebar } = this.props;
    HOCtoggleOffsidebar(false);
  };

  /**
   *
   * @returns {*}
   */
  render() {
    const { isOpen, toggleOffsidebar } = this.props;

    return (
      <aside
        className={cx(
          'app-offsidebar',
          isOpen ? 'app-offsidebar--open' : 'app-offsidebar--closed'
        )}
      >
        <div className="app-offsidebar__header">
          <Button
            className="app-offsidebar__header__close"
            onClick={toggleOffsidebar}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="app-offsidebar__header__close__icon ignore-react-onclickoutside"
            />
          </Button>
          Stuff here
        </div>
        <div className="app-offsidebar__separator" />
      </aside>
    );
  }
}

export default onClickOutside(Offsidebar);
