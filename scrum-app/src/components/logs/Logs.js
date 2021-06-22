import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../state/actions/logActions';

const Logs = ({ logs: { logs, loading }, getLogs }) => {
	useEffect(() => {
		getLogs();
	}, []);

	if (loading || logs === null) {
		return <Preloader />;
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">Team Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className="center">No logs to show...</p>
			) : (
				logs.map((log) => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
};

const mapStateToProps = (state) => ({
	logs: state.logs,
});

export default connect(mapStateToProps, { getLogs })(Logs);
