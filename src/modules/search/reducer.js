import { 
  RECEIVE_DRUG, 
  RECEIVE_RELATED_DRUGS 
} from './actions';

const DrugReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DRUG:
      return action.drug;
    case RECEIVE_RELATED_DRUGS:
      return action.drugs;
    default:
      return state;
  }
};

export default DrugReducer;