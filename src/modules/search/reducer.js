import merge from 'lodash/merge';

import { RECEIVE_DRUG } from './actions';

const DrugReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DRUG:
      return merge({}, { drug: action.drug });
    default:
      return state;
  }
};

export default DrugReducer;