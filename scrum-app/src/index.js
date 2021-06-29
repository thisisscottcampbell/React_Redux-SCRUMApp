import React from 'react';
import ReactDOM from 'react-dom';
import { StoreWrapper } from './Store';
import App from './App';

ReactDOM.render(
	<StoreWrapper>
		<App />
	</StoreWrapper>,
	document.getElementById('root')
);
