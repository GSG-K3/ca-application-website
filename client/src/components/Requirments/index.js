import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import styles from './style';
import { withStyles } from '@material-ui/core/styles';

class AutoGrid extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.container} id="steps">
				<Typography
					variant="h4"
					component="h4"
					gutterBottom
					color="primary"
					align="center"
				>
					Program Requirements
				</Typography>
				<Grid
					container
					direction="row"
					justify="space-around"
					alignItems="center"
				>
					<Grid item wrap xs={3}>
						<div className={classes.box}>
							<Avatar
								variant="square"
								src={require('../../assets/Fulltime.png')}
								className={classes.root}
							/>
						</div>
					</Grid>
					<Grid item wrap xs={3}>
						<div className={classes.box}>
							<Avatar
								variant="square"
								src={require('../../assets/motivation.svg')}
								className={classes.root}
							/>
						</div>
					</Grid>

					<Grid item wrap xs={3}>
						<div className={classes.box}>
							<Avatar
								variant="square"
								src={require('../../assets/EnglishRe.png')}
								className={classes.root}
							/>
						</div>
					</Grid>
					<Grid item wrap xs={3}>
						<div className={classes.box}>
							<Avatar
								variant="square"
								src={require('../../assets/english.png')}
								className={classes.root}
							/>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}
export default withStyles(styles)(AutoGrid);
