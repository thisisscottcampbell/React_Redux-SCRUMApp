import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addDev } from '../../state/actions/devActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddDevModal = ({ addDev }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter the first and last name' });
		} else {
			addDev({
				firstName,
				lastName,
			});

			M.toast({ html: `${firstName} ${lastName} was added as a dev` });

			// Clear Fields
			setFirstName('');
			setLastName('');
		}
	};

	return (
		<div id="add-dev-modal" className="modal">
			<div className="modal-content">
				<h4>New Dev</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="firstName"
							id="firstName"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<label htmlFor="firstName" className="active">
							First Name
						</label>
					</div>
				</div>

				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="lastName"
							id="lastName"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<label htmlFor="lastName" className="active">
							Last Name
						</label>
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

export default connect(null, { addDev })(AddDevModal);
