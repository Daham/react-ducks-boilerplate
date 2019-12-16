import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from "recompose";

//MUI components
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import MarkerBoard from '../../components/MarkerBoard/MarkerBoard';

import actions  from 'Actions';

console.log(actions);

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '15px',
        marginLeft: '10px',
        marginRight: '10px',

    }
});
class LayoutOne extends Component {

    buttonClickHandler = (value) => {
        this.props.onButtonClick();
    };

    render() {
        const { classes } = this.props;

        return <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <MarkerBoard title='Layout One' value={5} buttonClickCallback={this.buttonClickHandler} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    }
}

const mapStateToProps = state => {
    return { loading: state.auth.loading }
};

const matchDispatchToProps = dispatch => {
    return {
        onButtonClick: () => dispatch(actions.layoutOne.layoutOne()),
    }
};

LayoutOne.propTypes = {
    classes: PropTypes.object.isRequired
}

export default compose(
    withStyles(styles),
    connect(mapStateToProps, matchDispatchToProps),
)(LayoutOne);