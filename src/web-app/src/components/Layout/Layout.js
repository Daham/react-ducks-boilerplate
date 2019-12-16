/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 10:01:04
 * @modify date 2019-08-18 10:01:04
 * @desc Implementation of Layout which acts as the container for all windows selected by SideDrawer.
 */

import React, {Component} from 'react';
import PropTypes from "prop-types";

import classes from './Layout.css';

class Layout extends Component {

    render() {
        const { children } = this.props;

        return (
            <React.Fragment>
                <main className={classes.Content}>
                    {children}
                </main>
            </React.Fragment>
        );
    }
}

Layout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
};

export default Layout;