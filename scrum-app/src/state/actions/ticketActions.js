import {
	GET_TICKETS,
	SET_LOADING,
	TICKETS_ERROR,
	ADD_TICKET,
	DELETE_TICKET,
	UPDATE_TICKET,
	SEARCH_TICKETS,
	SET_CURRENT,
	CLEAR_CURRENT,
} from './types';

// get tickets
export const getTickets = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/tickets');
		const data = await res.json();

		dispatch({
			type: GET_TICKETS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: TICKETS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// create ticket
export const addTicket = (ticket) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/tickets', {
			method: 'POST',
			body: JSON.stringify(ticket),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: ADD_TICKET,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: TICKETS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// delete ticket
export const deleteTicket = (id) => async (dispatch) => {
	try {
		setLoading();

		await fetch(`/tickets/${id}`, {
			method: 'DELETE',
		});

		dispatch({
			type: DELETE_TICKET,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: TICKETS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// update ticket
export const updateTicket = (ticket) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/tickets/${ticket.id}`, {
			method: 'PUT',
			body: JSON.stringify(ticket),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await res.json();

		dispatch({
			type: UPDATE_TICKET,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: TICKETS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// filter tickets
export const searchTickets = (text) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/tickets?q=${text}`);
		const data = await res.json();

		dispatch({
			type: SEARCH_TICKETS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: TICKETS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// set current ticket data for update
export const setCurrent = (ticket) => {
	return {
		type: SET_CURRENT,
		payload: ticket,
	};
};

// clear update data
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

// set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
