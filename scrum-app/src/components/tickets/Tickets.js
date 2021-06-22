import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TicketItem from './TicketItem';
import Preloader from '../layout/Preloader';
import { getTickets } from '../../state/actions/ticketActions';

const Tickets = ({ ticket: { tickets, loading }, getTickets }) => {
	useEffect(() => {
		getTickets();
		// eslint-disable-next-line
	}, []);

	if (loading || tickets === null) {
		return <Preloader />;
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">Tickets</h4>
			</li>
			{!loading && tickets.length === 0 ? (
				<p className="center">No tickets to show...</p>
			) : (
				tickets.map((ticket) => <TicketItem ticket={ticket} key={ticket.id} />)
			)}
		</ul>
	);
};

const mapStateToProps = (state) => ({
	ticket: state.ticket,
});

export default connect(mapStateToProps, { getTickets })(Tickets);
