import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import {logUserOut} from '../store/actions/userActions';

const _ProtectedRoutes = ({component: Component, ...rest}) => {

    const loggedIn = rest.activeUser.loggedIn;

    return <Route {...rest} render={(props) => (
        loggedIn
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
}

const mapStateToProps = state => {
    return {
        activeUser:state.userState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logUserOut: () => dispatch(logUserOut())
    }
}

const LogoutRoute = ({component:Component, ...rest}) => {
    return <Route {...rest} render={(props) => (
        <Component {...props} />
    )} />
}


const ProtectedRoutes = connect(mapStateToProps, mapDispatchToProps)(_ProtectedRoutes);

export {
    ProtectedRoutes,
    LogoutRoute
}