import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const TechItem = () => {
	const onDelete = () => {
		// deleteTech(id);
		//M.toast({ html: 'Technician deleted' });
	};

	return (
		<li className="collection-item">
			<div>
				{/* {firstName} {lastName} */}
				<a href="#!" className="secondary-content" onClick={onDelete}>
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	);
};

export default TechItem;
