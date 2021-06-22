import React, { useState } from 'react';
import DevSelectOptions from '../devs/DevSelectOptions';
import { connect } from 'react-redux';
import { addTicket } from '../../state/actions/ticketActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTicketModal = ({ addTicket }) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [dev, setDev] = useState('');

	const onSubmit = () => {
		if (message === '' || dev === '') {
			M.toast({ html: 'Please enter a message and dev' });
		} else {
			const newTicket = {
				message,
				attention,
				dev,
				date: new Date(),
			};

			addTicket(newTicket);

			M.toast({ html: `Ticket added by ${dev}` });

			// Clear Fields
			setMessage('');
			setDev('');
			setAttention(false);
		}
	};

	return (
		<div id="add-ticket-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Create Ticket</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Ticket Message"
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
								Select Dev
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

export default connect(null, { addTicket })(AddTicketModal);
