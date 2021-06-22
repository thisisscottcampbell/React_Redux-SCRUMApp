import { combineReducers } from 'redux';
import { logReducer } from './logReducer';
import { devReducer } from './devReducer';

export const rootReducer = combineReducers({
	log: logReducer,
	dev: devReducer,
});
