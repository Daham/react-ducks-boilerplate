/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 09:54:38
 * @modify date 2019-08-18 09:54:38
 * @desc Implementation for Cloud Monitoring Inner Logo.
 */

import React from 'react';
//MUI components
import Typography from '@material-ui/core/Typography';
import classes from './InnerLogo.css';

const InnerLogo = props => {
    return (
        <div className={classes.Container}>
            <div className={classes.InnerLogo} />
            <Typography component="h1" variant="subtitle2">React Boiler Plate</Typography>
        </div>
    )
}

export default InnerLogo;