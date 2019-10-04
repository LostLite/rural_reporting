import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import './index.css'

const  navbar = ({activeUser}) => {
    return (
        <nav className="nav-wrapper purple darken-3 navBarPadding">
            <div className="brand-logo">Incident Reporting Portal</div>
            <ul className="right">
                {activeUser.loggedIn ? (<>
                    <li><NavLink to="/dashboard">Reported Cases</NavLink></li>
                    <li><NavLink to="/raisedalerts">Raised Alerts</NavLink></li>
                    <li><NavLink to="/logout">Logout</NavLink></li>
                </>):(<>
                    <li><NavLink to="/login">Login</NavLink></li>
                </>)}
            </ul>
        </nav>
    )
}

function mapStateToProps(state) {
    
    return {
        activeUser: state.userState
    };
}

export default connect(mapStateToProps,null)(navbar)
