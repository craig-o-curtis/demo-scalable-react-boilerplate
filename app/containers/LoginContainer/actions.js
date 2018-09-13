/*
 *
 * LoginContainer actions
 *
 */

import {
  LOGIN,
  CANCEL_LOGIN,
} from './constants';


// login action creator
export function login(email) {
  return {
    type: LOGIN,
    email,
  };
}

// cancel_login action creator
export function cancelLogin() {
  return {
    type: CANCEL_LOGIN,
  };
}
