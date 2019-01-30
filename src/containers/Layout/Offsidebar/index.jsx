// @flow
import React, { PureComponent } from 'react';
import onClickOutside from 'react-onclickoutside';
import cx from 'classnames';
// Components
import Button from 'atoms/Button';
// Style
import './style.scss';
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type Props = {
  isOpen: boolean,
  toggleOffsidebar: boolean => void
};

export class Offsidebar extends PureComponent<Props> {
  // used by on click outside wrapper
  handleClickOutside = () => {
    const { toggleOffsidebar } = this.props;
    toggleOffsidebar(false);
  };

  render() {
    const { isOpen } = this.props;
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
            onClick={this.handleClickOutside}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="app-offsidebar__header__close__icon"
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
