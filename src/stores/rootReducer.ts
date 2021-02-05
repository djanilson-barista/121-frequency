import { combineReducers } from 'redux';
import { survivorReducer } from './survivors';

export default combineReducers({
  survivorState: survivorReducer,
});
