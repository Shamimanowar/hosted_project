import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authLogOut } from '../../redux/actionCreators'
import { Redirect } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
    return {
        authLogout: () => dispatch(authLogOut())
    }
}

class Logout extends Component {
    componentDidMount() {
        this.props.authLogout();
    }
    render() {
        return (
            < Redirect to='/' />
        )
    }
}

export default connect(null, mapDispatchToProps)(Logout);
