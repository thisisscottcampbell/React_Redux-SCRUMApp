import React, { useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
	useEffect(() => {
		// getTechs();
	}, []);

	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4>Technician List</h4>
				{/* <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul> */}
			</div>
		</div>
	);
};

export default TechListModal;
