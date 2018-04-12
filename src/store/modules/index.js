// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import example from './example';
import popular from './popular/popular';
import auth from './auth/auth';

export default combineReducers({
  popular,
  example,
  auth,
  routing: routerReducer,
});
