import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import '../styles/alert.css'

const Alert_ = ({ alerts }) => {
    return (
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
            <div key={alert.id} className = {`alert-pop-pup ${ alert.alertType}`} >
                <p>{alert.msg}</p> 
            </div>
        ))
    );
};

Alert_.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
    alerts: state.alert,
});

export default connect(mapStateToProps)(Alert_);