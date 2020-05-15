import React, { Fragment, Component } from 'react';
import error from '../../assets/505.png';
import { withStyles } from '@material-ui/styles';
import style from './style';
import { Typography, Grid } from '@material-ui/core';
class InternalError extends Component {
	state = {};
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.body}>
				<Grid spacing={4}>
					<img
						src={require('../../assets/logo-GsG.svg')}
						alt="logo"
						className={classes.logo}
					/>
				</Grid>
				<Grid
					item
					container
					direction="row"
					justify="space-around"
					alignItems="center"
					className={classes.border}
				>
					<Typography variant="h3" color="primary">
						Internal Server Error 505!
					</Typography>
					<Grid>
						<img src={error} alt="error page" className={classes.img} />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(style)(InternalError);
