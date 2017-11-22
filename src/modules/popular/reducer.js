import merge from 'lodash/merge';

import { RECEIVE_DRUGS } from './actions';

const PopularReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DRUGS:
      return merge({}, { popular: action.drugs });
    default:
      return state;
  }
};

export default PopularReducer;