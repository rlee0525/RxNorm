import { combineReducers } from 'redux';
import SessionReducer from 'modules/auth/reducer';
import ErrorsReducer from 'common/errors/reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer
});

export default RootReducer;
