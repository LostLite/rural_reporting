import React from 'react'
import { Switch, Route} from 'react-router-dom';
import {ProtectedRoutes, LogoutRoute} from './helpers/routeManager';
import Dashboard from './components/dashboard';
import RaisedAlerts from './components/raisedalerts';
import Login from './components/login';
import Logout from './components/logout';
import NotFound from './components/404';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <ProtectedRoutes path='/dashboard' component={Dashboard} />
        <ProtectedRoutes path='/raisedalerts' component={RaisedAlerts} />
        <LogoutRoute path='/logout' component={Logout}/>
        <Route component={NotFound}/>
    </Switch>
);

export default Routes;

