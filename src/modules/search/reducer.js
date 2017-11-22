import { 
  RECEIVE_DRUG, 
  RECEIVE_RELATED_DRUGS 
} from './actions';

const _default = { "drugGroup": { "name": "alavert", "conceptGroup": [{ "tty": "BPCK" }, { "tty": "SBD", "conceptProperties": [{ "rxcui": "351855", "name": "Loratadine 10 MG Disintegrating Oral Tablet [Alavert]", "synonym": "Alavert 10 MG Disintegrating Oral Tablet", "tty": "SBD", "language": "ENG", "suppress": "N", "umlscui": "C1169454" }, { "rxcui": "755475", "name": "Loratadine 1 MG/ML Oral Solution [Alavert]", "synonym": "Alavert 1 MG/ML Oral Solution", "tty": "SBD", "language": "ENG", "suppress": "N", "umlscui": "C1635195" }, { "rxcui": "997953", "name": "Loratadine 10 MG Oral Tablet [Alavert]", "synonym": "Alavert 10 MG Oral Tablet", "tty": "SBD", "language": "ENG", "suppress": "N", "umlscui": "C2920298" }] }] } };

const DrugReducer = (state = _default, action) => {
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