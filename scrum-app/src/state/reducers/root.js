import { combineReducers } from 'redux';
import { ticketReducer } from './ticketReducer';
import { devReducer } from './devReducer';

export const rootReducer = combineReducers({
	ticket: ticketReducer,
	dev: devReducer,
});
