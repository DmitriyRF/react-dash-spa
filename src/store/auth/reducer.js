import Cookies from 'js-cookie';
import { AUTH_SIGIN_OUT, AUTH_SIGIN_IN } from './actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {},
  token: '12'
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_SIGIN_IN:
      Cookies.set('token', action.payload.token);
      return { ...state, isAuthenticated: true, ...action.payload };
    case AUTH_SIGIN_OUT:
      Cookies.remove('token');
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
}
