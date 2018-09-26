import { AUTH_SIGIN_OUT, AUTH_SIGIN_IN } from './actionTypes';

const signIn = data => {
  return { type: AUTH_SIGIN_IN, payload: { ...data } };
};

const signOut = () => {
  return { type: AUTH_SIGIN_OUT, payload: {} };
};


export { signIn, signOut };
