// @flow
import { observable, action } from 'mobx';
import type { ComponentType } from 'react';
import type { ModalInterface } from 'declarations/modal';

class Modal implements ModalInterface {
  @observable component: ?ComponentType<*>;

  @action close = (): void => {
    this.component = undefined;
  };

  @action open = (component: ?ComponentType<*>) => {
    if (typeof component === 'function') this.component = component;
  };

  toggleVisibility = (component: ?ComponentType<*>): void =>
    this.component ? this.close() : this.open(component);
}

export default new Modal();
