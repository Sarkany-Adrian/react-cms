import Auth from 'stores/auth';

describe('Auth store', () => {
  it('sets the value of logged in flag', () => {
    Auth.setLoggedIn(true);
    expect(Auth.isLoggedIn).toBe(true);
  });
});
