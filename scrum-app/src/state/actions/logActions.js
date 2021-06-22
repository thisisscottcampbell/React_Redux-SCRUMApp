import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_LOG,
	SEARCH_LOGS,
} from './types';
import axios from 'axios';

const LOGS = 'http://localhost:5000/logs';

//get curent logs
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

//post new log
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

//delete log
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

//update current log
export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(LOGS / `${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();

		dispatch({
			type: UPDATE_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

//set selected data for put req
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};

//reset selected
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

//set loading
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};

//filter db
export const filterLogs = (text) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`${LOGS}?q=${text}`);
		const data = await res.json();

		dispatch({
			type: SEARCH_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err,
		});
	}
};
