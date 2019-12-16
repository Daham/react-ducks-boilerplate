/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 09:55:50
 * @modify date 2019-08-18 09:55:50
 * @desc Implementation for Cloud Monitoring Outer Logo.
 */

import React from 'react';
//MUI components.
import Typography from '@material-ui/core/Typography';
import classes from './Logo.css';

const Logo = props => {
    return (
        <React.Fragment>
                    <div className={classes.Logo} />
                    <Typography component="h1" variant="h5">Monitoring System</Typography>
        </React.Fragment >
    )
}

export default Logo;