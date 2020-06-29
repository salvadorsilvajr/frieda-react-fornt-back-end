import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
	alerts !== null &&
	alerts.length > 0 &&
	alerts.map((alert) => (
		<div className='container'>
			<div key={alert.id} className={`m-a alert alert-${alert.alertType}`}>
				<div className='p-a'>{alert.msg}</div>
			</div>
		</div>
	));

Alert.propTypes = {
	alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
	alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
