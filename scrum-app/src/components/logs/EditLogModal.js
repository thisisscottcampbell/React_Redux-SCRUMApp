import React, { useState, useEffect } from 'react';
import DevSelectOptions from '../devs/DevSelectOptions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../state/actions/logActions';

const EditLogModal = ({ current, updateLog }) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [dev, setDev] = useState('');

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setAttention(current.attention);
			setDev(current.dev);
		}
	}, [current]);

	const onSubmit = () => {
		if (message === '' || dev === '') {
			M.toast({ html: 'Please enter a message and dev' });
		} else {
			const updLog = {
				id: current.id,
				message,
				attention,
				dev,
				date: new Date(),
			};

			updateLog(updLog);
			M.toast({ html: `Log updated by ${dev}` });

			// Clear Fields
			setMessage('');
			setDev('');
			setAttention(false);
		}
	};

	return (
		<div id="edit-log-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Enter System Log</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<select
							name="dev"
							value={dev}
							className="browser-default"
							onChange={(e) => setDev(e.target.value)}
						>
							<option value="" disabled>
								Select devnician
							</option>
							<DevSelectOptions />
						</select>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input
									type="checkbox"
									className="filled-in"
									checked={attention}
									value={attention}
									onChange={(e) => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					onClick={onSubmit}
					className="modal-close waves-effect blue waves-light btn"
				>
					Enter
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '75%',
	height: '75%',
};

const mapStateToProps = (state) => ({
	current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);
