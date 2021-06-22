import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';
import axios from 'axios';

export const getLogs = () => async (dispatch) => {
	console.log('GET LOGS');
	try {
		setLoading();

		const res = await fetch('http://localhost:5000/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

//set loading
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
