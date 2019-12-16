/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 10:03:54
 * @modify date 2019-08-18 10:03:54
 * @desc Implementation of StatusLegend functional component.
 */

import React from 'react';
import PropTypes from 'prop-types';

//MUI components
import { withStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
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
        marginLeft: 'auto',
        marginBottom: 0
    }
});

const profilePopover = props => {

    const { classes, anchorEl, profile, handleLogout, handleClose } = props;

    return (
        <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            <List>
                <ListItem >
                    <Typography>Signed in as <b>{profile.username}</b></Typography>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Typography>Profile</Typography>
                </ListItem>
                <ListItem button>
                    <Typography>Settings</Typography>
                </ListItem>
                <Divider />
                <ListItem >
                    <Button variant="contained" color="primary" onClick={handleLogout} className={classes.logoutButton}>Sign out</Button>
                </ListItem>
            </List>
        </Popover>
    )
}


profilePopover.propTypes = {
    classes: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    anchorEl: PropTypes.instanceOf(Element).isRequired,
    handleLogout: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(profilePopover);