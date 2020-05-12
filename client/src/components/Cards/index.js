import React, { Component, Fragment } from 'react';
import { Paper, Grid, Avatar, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import styles from './style';
class Cards extends Component {
	state = {};
	render() {
		const { classes, location } = this.props;
		return (
			<Fragment>
				<Grid
					classes={{ root: classes.root }}
					className={location === '/user/:userId' ? classes.card : null}
				>
					<Paper
						variant="outlined"
						elevation={1}
						classes={{ root: classes.paper }}
					>
						<Avatar
							alt="github"
							src={require('../../assets/github.png')}
							className={classes.logo}
						/>
						<Typography gutterBottom variant="h4" align="center">
							GetHub
						</Typography>
						<Divider className={classes.divider} variant="middle" />
						<Typography gutterBottom variant="subtitle1" align="center">
							create a github account for your projects and back here to post
							your account's link Please Click
							<a href="https://github.com/">here!</a>
						</Typography>
					</Paper>
					<Paper
						variant="outlined"
						elevation={1}
						classes={{ root: classes.paper }}
					>
						<Avatar
							alt="freecodecamp logo"
							src={require('../../assets/freecode.png')}
							className={classes.logo}
						/>
						<Typography gutterBottom variant="h4" align="center">
							Freecodecamp
						</Typography>
						<Divider className={classes.divider} variant="middle" />
						<Typography gutterBottom variant="subtitle1" align="center">
							create a Freecodecamp account.You should acheive at least 200
							points.Please Click
							<a href="https://https://www.freecodecamp.org/.com/">here!</a>
						</Typography>
					</Paper>
					<Paper
						variant="outlined"
						elevation={1}
						classes={{ root: classes.paper }}
					>
						<Avatar
							alt="codewar logo"
							src={require('../../assets/codewarsicon.png')}
							className={classes.logo}
						/>
						<Typography gutterBottom variant="h4" align="center">
							Codewars
						</Typography>
						<Divider className={classes.divider} variant="middle" />
						<Typography gutterBottom variant="subtitle1" align="center">
							create a codewars account.You should acheive the 5kyu level of
							javascript.Please Click
							<a href="https://www.codewars.com/">here!</a>
						</Typography>
					</Paper>
				</Grid>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Cards);
