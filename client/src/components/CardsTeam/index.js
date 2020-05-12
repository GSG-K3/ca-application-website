import React, { Component, Fragment } from 'react';
import style from './style';
import { withStyles } from '@material-ui/styles';
import { Paper, Grid, Typography, Divider, Link } from '@material-ui/core';

class CardsTeam extends Component {
	state = {};
	render() {
		const { classes, data } = this.props;
		const preventDefault = (event) => event.preventDefault();
		return (
			<Fragment>
				<Paper
					variant="outlined"
					elevation={1}
					classes={{ root: classes.paper }}
				>
					<img
						alt="mentor"
						src={
							data.id === 1 ? require('../../assets/Haneen.jpeg') : data.picture
						}
						className={classes.img}
					/>
					<Divider className={classes.divider} variant="middle" />
					<Typography gutterBottom variant="subtitle1" align="center">
						{data.name}
					</Typography>
					<Grid
						item
						wrap
						container
						direction="row"
						justify="center"
						alignItems="center"
					>
						<Link href="#" onClick={preventDefault}>
							<img
								src={require('../../assets/discord.png')}
								alt="discord"
								className={classes.discord}
							/>
						</Link>
						<Link href="#" onClick={preventDefault}>
							<img
								src={require('../../assets/githubicon.png')}
								alt="github"
								className={classes.discord}
							/>
						</Link>
						<Link href="#" onClick={preventDefault}>
							<img
								src={require('../../assets/slack.png')}
								alt="Slack"
								className={classes.discord}
							/>
						</Link>
					</Grid>
					<Typography gutterBottom variant="subtitle1" align="center">
						{data.disciption}
					</Typography>
				</Paper>
			</Fragment>
		);
	}
}

export default withStyles(style)(CardsTeam);
