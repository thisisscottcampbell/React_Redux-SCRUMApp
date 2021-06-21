import React, { useEffect, useState } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import axios from 'axios';

const Logs = () => {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => getLogs(), []);

	const getLogs = async () => {
		setLoading(true);

		const res = await axios.get('http://localhost:5000/logs');
		console.log(res);

		setLogs(res.data);
		setLoading(false);
	};

	if (loading) return <Preloader />;
	return (
		<ul className="collection with-header">
			<li className="collection header">
				<h4 className="center">System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p>No more logs to show...</p>
			) : (
				logs.map((log) => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
};

export default Logs;
