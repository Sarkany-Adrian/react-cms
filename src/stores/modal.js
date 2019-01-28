// @flow
import { observable, action } from 'mobx';
import { type TComponent } from 'declarations/modal';

class Modal {
  @observable component: TComponent;

  @action close = (): void => {
    this.component = undefined;
  };

  @action open = (component: TComponent): void => {
    this.component = component;
  };

  toggleVisibility = (component: TComponent): void =>
    this.component ? this.close() : this.open(component);
}

export default new Modal();
