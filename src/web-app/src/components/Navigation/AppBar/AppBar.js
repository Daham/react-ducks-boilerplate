/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-09-07 10:01:10
 * @modify date 2019-09-07 10:01:10
 * @desc [description]
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from "recompose";
import { connect } from 'react-redux';

//MUI components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { actions as authActions } from '../../../redux/modules/auth';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        minHeight: '72px',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    profileMenu: {
        marginLeft: "auto",
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
        marginTop: 10,
        marginLeft: 20,
        width: 30,
        height: 30,
        textAlign: 'center'
    },
    bigAvatar: {
        margin: 0,
        width: 30,
        height: 30,
    },
    signedUser: {
        marginTop: 10,
        textAlign: 'center'
    },
    logoutButton: {
        align: 'right',
        marginBottom: 10,
        marginLeft: 20,
    }
});

/**
 * @description
 * @author Daham Pathiraja
 * @class AppBar
 * @extends {Component}
 */
class CustomAppBar extends Component {

    state = {
        anchorEl: null
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    };

    handleMenu = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    };

    handleLogout = () => {
        this.props.ssoSingleLogout();

        this.setState({
            anchorEl: null
        })
    };

    render() {
        const { classes, handleDrawerToggle, profile } = this.props;

        return (
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
};

const matchDispatchToProps = dispatch => {
    return {
        ssoSingleLogout: (history) => dispatch(authActions.ssoSingleLogout(history))
    }
};

CustomAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired
};

export default compose(
    withStyles(styles),
    connect(mapStateToProps, matchDispatchToProps),
)(CustomAppBar);
