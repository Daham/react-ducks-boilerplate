/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 09:55:50
 * @modify date 2019-08-18 09:55:50
 * @desc Implementation for Cloud Monitoring Outer Logo.
 */

import React, { Component } from 'react';
//MUI components.
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './MarkerBoard.css';

const buttonStyle = {
    marginTop: '15px',
    marginBottom: '15px',
    textAlign: 'left'
};
const textFieldStyle = {
    marginTop: '15px',
    marginBottom: '15px',
    textAlign: 'right'
};

class MarkerBoard extends Component {

    state = {
        textFieldValue: '',
    };

    handleTextFieldChange = (event) => {
        this.setState({ textFieldValue: event.target.value });
    };

    render() {
        const { title, value, buttonClickCallback } = this.props;

        return <React.Fragment >
            <Grid item xs={12}>
                <div />
                <Typography component="h1" variant="h5">{`${title} Value: ${value}`}</Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item xs={3} />
                    <Grid item xs={3}>
                        <div style={textFieldStyle}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={this.state.textFieldValue} onChange={this.handleTextFieldChange} />
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div style={buttonStyle}>
                            <Button variant="contained" color="primary" onClick={
                                () => buttonClickCallback(this.state.textFieldValue)}>
                                Primary
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={3} />
                </Grid>
            </Grid>
        </React.Fragment>
    }

}

export default MarkerBoard;