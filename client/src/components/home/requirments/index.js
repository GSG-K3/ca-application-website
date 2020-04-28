import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


export default function Grid(){
    return(
        <div className={classes.root}>
            <Grid container spacing = {4} >
                <Grid item xs>

                </Grid>
            </Grid>

        </div>
    );
}