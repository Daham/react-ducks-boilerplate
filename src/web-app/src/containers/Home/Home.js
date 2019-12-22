/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 09:50:31
 * @modify date 2019-08-18 09:50:31
 * @desc Implenentation of Home component. This includes setting up SideDrawer, placing Layout to dock major windows upon route changes.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
//MUI components
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/es/styles/withStyles";

//Custom components
import Layout from '../../components/Layout/Layout';
import AppBar from "../../components/Navigation/AppBar/AppBar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import LayoutMain from '../LayoutMain/LayoutMain';

const styles = {
    root: {
        display: 'flex',
    }
};

class Home extends Component {

    state = {
        mobileOpen: false
    };

    handleDrawerToggle(){

    }

    render() {
        const { classes, match } = this.props;

        return (
            <div className={classes.root}>
                <React.Fragment>
                    <CssBaseline />
                    <AppBar xhandleDrawerToggle={this.handleDrawerToggle} />
                    <SideDrawer
                        listItemArray={[
                            {
                                name: 'Layout 1',
                                path: `${match.url}`,
                                icon: 'layout1'
                            },
                            {
                                name: 'Layout 2',
                                path: `${match.url}/layout2`,
                                icon: 'layout2'
                            },
                            {
                                name: 'Layout 3',
                                path: `${match.url}/layout3`,
                                icon: 'layout3',
                                children: [{
                                    name: 'Sub Layout 1_3',
                                    path: `${match.url}/layout3/subLayout1_3`,
                                    icon: 'subLayout1_3',
                                },
                                {
                                    name: 'Sub Layout 2_3',
                                    path: `${match.url}/layout3/subLayout2_3`,
                                    icon: 'subLayout2_3',
                                }]
                            },
                            {
                                name: 'Layout 4',
                                path: `${match.url}/layout4`,
                                icon: 'layout4',
                                children: [{
                                    name: 'Sub Layout 1_4',
                                    path: `${match.url}/layout4/subLayout1_4`,
                                    icon: 'subLayout1_4',
                                },
                                {
                                    name: 'Sub Layout 2_4',
                                    path: `${match.url}/layout4/subLayout2_4`,
                                    icon: 'subLayout2_4',
                                }]
                            }
                        ]}
                        handleDrawerToggle={this.handleDrawerToggle}
                        mobileOpen={this.state.mobileOpen} />
                    <Layout>
                        <Switch>
                            <Route exact path={`${match.url}`} component={LayoutMain} />
                            <Route path={`${match.url}/layout2`} component={() => <h1>Layout 2</h1>} />
                        </Switch>
                    </Layout>
                </React.Fragment>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

