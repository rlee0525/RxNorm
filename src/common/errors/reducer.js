import { merge, extend } from 'lodash';

import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from './actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
