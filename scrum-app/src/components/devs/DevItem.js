import React from 'react';
import { connect } from 'react-redux';
import { deleteDev } from '../../state/actions/devActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const DevItem = ({ dev: { id, firstName, lastName }, deleteDev }) => {
	const onDelete = () => {
		deleteDev(id);
		M.toast({ html: 'Dev deleted' });
	};

	return (
		<li className="collection-item">
			<div>
				{firstName} {lastName}
				<a href="#!" className="secondary-content" onClick={onDelete}>
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	);
};

export default connect(null, { deleteDev })(DevItem);
