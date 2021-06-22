import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { filterLogs } from '../../state/actions/logActions';

const SearchBar = ({ filterLogs }) => {
	const text = useRef('');

	const onChange = (e) => {
		filterLogs(text.current.value);
	};

	return (
		<nav style={{ marginBottom: '30px' }} className="blue">
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input
							id="search"
							type="search"
							placeholder="Search Logs.."
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

export default connect(null, { filterLogs })(SearchBar);
