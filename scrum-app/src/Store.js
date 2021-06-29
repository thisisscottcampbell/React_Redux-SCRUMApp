import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { rootReducer } from './state/reducers/root';

const initialState = {};

const middleware = [thunk];

export const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export const StoreWrapper = (props) => {
	return <Provider store={store}>{props.children}</Provider>;
};
