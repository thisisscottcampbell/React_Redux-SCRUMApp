import { combineReducers } from 'redux';
import { logReducer } from './logReducer';
import { techReducer } from './techsReducer';

export const rootReducer = combineReducers({
	log: logReducer,
	tech: techReducer,
});
