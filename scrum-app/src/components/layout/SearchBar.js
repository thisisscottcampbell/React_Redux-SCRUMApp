import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchTickets } from '../../state/actions/ticketActions';

const SearchBar = ({ searchTickets }) => {
	const text = useRef('');

	const onChange = (e) => {
		searchTickets(text.current.value);
	};

	return (
		<nav style={{ marginBottom: '30px' }} className="blue">
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input
							id="search"
							type="search"
							placeholder="Filter Tickets..."
							ref={text}
							onChange={onChange}
						/>
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

export default connect(null, { searchTickets })(SearchBar);
