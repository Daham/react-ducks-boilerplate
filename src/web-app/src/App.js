/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 08:17:46
 * @modify date 2019-08-18 08:17:46
 * @desc Primary organization of the application routes by configuring the app to get lazy loaded upon authentication.
 */

import React, { Component, Fragment, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './containers/Auth/Auth';

const Home = lazy(() => import('./containers/Home/Home'));

class App extends Component {

    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/auth" component={Auth} />
                    <Route path="/home"
                        render={routeProps => {
                            return this.props.isAuthenticated ? <Suspense fallback={<div>Loading...</div>}>
                                <Home {...routeProps} />
                            </Suspense> : <Redirect to="/auth" />
                        }} />
                    <Redirect from="/" to="/home" />
                </Switch>
            </Fragment>);
    }
}

const mapStateToProps = state => {
    return { isAuthenticated: state.auth.isAuthenticated }
};

export default connect(mapStateToProps, null)(App);
