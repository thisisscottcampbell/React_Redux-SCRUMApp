import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';
import axios from 'axios';

export const getLogs = () => async (dispatch) => {
	try {
		setLoading();

		const res = await axios.get('http://localhost:5000/logs');
		dispatch({
			type: GET_LOGS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};

//set loading
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
