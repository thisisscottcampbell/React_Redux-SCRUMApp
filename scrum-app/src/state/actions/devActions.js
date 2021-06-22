import {
	GET_DEVS,
	ADD_DEV,
	DELETE_DEV,
	SET_LOADING,
	DEVS_ERROR,
} from './types';

// Get devs
export const getDevs = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/devs');
		const data = await res.json();

		dispatch({
			type: GET_DEVS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: DEVS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Add dev
export const addDev = (dev) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/devs', {
			method: 'POST',
			body: JSON.stringify(dev),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: ADD_DEV,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: DEVS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// delete dev
export const deleteDev = (id) => async (dispatch) => {
	try {
		setLoading();

		await fetch(`/devs/${id}`, {
			method: 'DELETE',
		});

		dispatch({
			type: DELETE_DEV,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: DEVS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
