/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 10:02:04
 * @modify date 2019-08-18 10:02:04
 * @desc Implementation of reusable SideDrawer which support any depth nested selections.
 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
//MUI components
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Hidden from "@material-ui/core/Hidden";
import Divider from '@material-ui/core/Divider';
import InnerLogo from '../../InnerLogo/InnerLogo';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { getIcon } from './iconPicker';

const drawerWidth = 260;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    firstLevelLink: { textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' },
    nested: {
        paddingLeft: theme.spacing(2),
    }
});

class SideDrawer extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    state = {}

    handleClick(item) {
        this.setState(prevState => (
            { [item]: !prevState[item] }
        ))
    }

    getJsonLevel(obj) {
        let maxLevel = 1;

        for (let key in obj) {
            if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
                const depth = getJsonLevel(obj[key]) + 1;
                maxLevel = Math.max(depth, maxLevel);
            }
        }
        return maxLevel;
    }

    render() {
        const { classes, theme, mobileOpen, handleDrawerToggle, listItemArray, location } = this.props;


        const ItemList = ({ listItemArray }) => {
            return (
                <List>
                    {listItemArray.map((item) => (
                        <Fragment>
                            <NavLink to={`${item.path}`} style={{ textDecoration: 'none', color: 'rgba(0, 0, 0, 0.87)' }} >
                                <ListItem button key={item.name} onClick={() => this.handleClick(item.name)} >
                                    <ListItemIcon>{getIcon(item.icon)}</ListItemIcon>
                                    <ListItemText primary={item.name} />
                                    {(item.children) && (this.state[item.name] ? <ExpandLess /> : <ExpandMore />)}
                                </ListItem>
                            </NavLink>
                            {(item.children) &&
                                < Collapse in={this.state[item.name]} timeout="auto" unmountOnExit>
                                    <List className={classes.nested}><ItemList listItemArray={item.children} /></List>
                                </Collapse>}
                        </Fragment>
                    ))}
                </List>
            );
        };

        const drawer = (
            <div className={classes.drawer}>
                <ItemList listItemArray={listItemArray} />
            </div>
        );


        return (
            <Fragment>
                <nav className={classes.drawer}>
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={this.props.container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >

                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            <InnerLogo />
                            <Divider />
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
            </Fragment>

        );
    }
}

SideDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withRouter(withStyles(styles, { withTheme: true })(SideDrawer));