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
} from '../actions/types';

const initialState = {
	tickets: null,
	current: null,
	loading: false,
	error: null,
};

export const ticketReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TICKETS:
			return {
				...state,
				tickets: action.payload,
				loading: false,
			};
		case ADD_TICKET:
			return {
				...state,
				tickets: [...state.tickets, action.payload],
				loading: false,
			};
		case DELETE_TICKET:
			return {
				...state,
				tickets: state.tickets.filter((ticket) => ticket.id !== action.payload),
				loading: false,
			};
		case UPDATE_TICKET:
			return {
				...state,
				tickets: state.tickets.map((ticket) =>
					ticket.id === action.payload.id ? action.payload : ticket
				),
			};
		case SEARCH_TICKETS:
			return {
				...state,
				tickets: action.payload,
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case TICKETS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
