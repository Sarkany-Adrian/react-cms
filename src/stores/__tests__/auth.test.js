import Auth from 'stores/auth';

/**
 *
 */
test('sets the value of logged in flag', () => {
  Auth.setLoggedIn(true);
  expect(Auth.isLoggedIn).toBe(true);
});
