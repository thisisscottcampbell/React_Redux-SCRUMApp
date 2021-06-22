import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDevs } from '../../state/actions/devActions';
import DevItem from './DevItem';

const DevListModal = ({ getDevs, dev: { devs, loading } }) => {
	useEffect(() => {
		getDevs();
	}, []);

	return (
		<div id="dev-list-modal" className="modal">
			<div className="modal-content">
				<h4>Dev Team</h4>
				<ul className="collection">
					{!loading &&
						devs !== null &&
						devs.map((dev) => <DevItem dev={dev} key={dev.id} />)}
				</ul>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	dev: state.dev,
});

export default connect(mapStateToProps, { getDevs })(DevListModal);
