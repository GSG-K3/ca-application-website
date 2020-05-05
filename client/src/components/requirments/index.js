import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Typed from "react-typed";
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import req from '../../assets/MYpic.svg'
import req1 from '../../assets/MYpic (1).svg'
import req2 from '../../assets/MYpic (2).svg'
import req3 from '../../assets/MYpic (3).svg'
import styles from './style'
import { withStyles } from '@material-ui/core/styles';


 class AutoGrid extends Component {
    render (){
        const {classes} = this.props;
        
       return (   
           
        <div>
             <Typography variant="h3" component="h2" gutterBottom className={classes.title}>
             Program Requirements
      </Typography>


            <Grid container spacing ={6}>
         
            
                <Grid item xs={2}>
                <Avatar variant="square"  src={req}  className={classes.root}/>
                  <Typography className={classes.type}>dfdsfdsfds </Typography>
                </Grid>
                <Grid item xs={2}>
                <Avatar variant="square"  src={req1}  className={classes.root}/>
                <Typography className={classes.type}>dfdsfdsfds </Typography>

                 </Grid>
                <Grid item xs={2}>
                <Avatar variant="square"  src={req2}  className={classes.root}/>
                <Typography className={classes.type}>dfdsfdsfds </Typography>

                </Grid>
                <Grid item xs={2}>
                <Avatar variant="square"  src={req3}  className={classes.root}/>
                <Typography className={classes.type}>dfdsfdsfds </Typography>

                </Grid>
           
         
 </Grid> 
        </div>
    ) 
    }
    
}
export default withStyles(styles)(AutoGrid)