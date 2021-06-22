import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDevs } from '../../state/actions/devActions';

const DevSelectOptions = ({ getDevs, dev: { devs, loading } }) => {
	useEffect(() => {
		getDevs();
		// eslint-disable-next-line
	}, []);

	return (
		!loading &&
		devs !== null &&
		devs.map((t) => (
			<option key={t.id} value={`${t.firstName} ${t.lastName}`}>
				{t.firstName} {t.lastName}
			</option>
		))
	);
};

const mapStateToProps = (state) => ({
	dev: state.dev,
});

export default connect(mapStateToProps, { getDevs })(DevSelectOptions);
