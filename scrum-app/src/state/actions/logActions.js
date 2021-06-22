import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
} from './types';
import axios from 'axios';

const LOGS = 'http://localhost:5000/logs';

export const getLogs = () => async (dispatch) => {
	console.log('GET LOGS');
	try {
		setLoading();

		const res = await axios.get(LOGS);

		dispatch({
			type: GET_LOGS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(LOGS, {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Delete log from server
export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading();

		await fetch(LOGS / `${id}`, {
			method: 'DELETE',
		});

		dispatch({
			type: DELETE_LOG,
			payload: id,
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
