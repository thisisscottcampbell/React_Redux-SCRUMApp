import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteTicket, setCurrent } from '../../state/actions/ticketActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const TicketItem = ({ ticket, deleteTicket, setCurrent }) => {
	const onDelete = () => {
		deleteTicket(ticket.id);
		M.toast({ html: 'Ticket Deleted' });
	};

	return (
		<li className="collection-item">
			<div>
				<a
					href="#edit-ticket-modal"
					className={`modal-trigger ${
						ticket.attention ? 'red-text' : 'blue-text'
					}`}
					onClick={() => setCurrent(ticket)}
				>
					{ticket.message}
				</a>
				<br />
				<span className="grey-text">
					<span className="black-text">ID #{ticket.id}</span> last updated by{' '}
					<span className="black-text">{ticket.dev}</span> on{' '}
					<Moment format="MMMM Do YYYY, h:mm:ss a">{ticket.date}</Moment>
				</span>
				<a href="#!" onClick={onDelete} className="secondary-content">
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	);
};

export default connect(null, { deleteTicket, setCurrent })(TicketItem);
