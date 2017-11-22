import { combineReducers } from 'redux';

import DrugReducer from 'modules/search/reducer';
import SessionReducer from 'modules/auth/reducer';
import PopularReducer from 'modules/popular/reducer';

const RootReducer = combineReducers({
  drug: DrugReducer,
  session: SessionReducer,
  popular: PopularReducer
});

export default RootReducer;
