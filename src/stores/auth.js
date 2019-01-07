// @flow
import { observable, action } from 'mobx';

class Auth {
  @observable isLoggedIn = false;

  @action
  setLoggedIn = (isLoggedIn: boolean) => {
    this.isLoggedIn = isLoggedIn;
  };
}

const store = new Auth();
export default store;
