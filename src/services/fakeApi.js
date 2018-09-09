/* eslint-disable import/prefer-default-export,prefer-promise-reject-errors */
const AuthService = {
  signIn(loginEmail, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (loginEmail === 'test@epam.com' && password === '1234') {
          resolve({
            user: {
              name: 'Test User',
              loginEmail: 'test@epam.com'
            },
            token: '123231'
          });
        }
        reject({
          errors: {
            loginEmail: 'unknown user or bad password'
          }
        });
      }, 1000);
    });
  },

  reviveSession(token) {
    if (token === '123231') {
      return {
        user: {
          name: 'Test User',
          loginEmail: 'test@epam.com'
        },
        token: '123231'
      };
    }
    return false;
  }
};
export { AuthService };
