import { combineReducers } from 'redux';
import SessionReducer from 'modules/auth/reducer';

const RootReducer = combineReducers({
  session: SessionReducer
});

export default RootReducer;
