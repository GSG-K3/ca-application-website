import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import Card from '../CardsTeam';
import { Grid, Typography } from '@material-ui/core';

class SupportTeam extends Component {
	state = {};

	render() {
		const { classes, data } = this.props;
		return (
			<Fragment>
				<div id="mentors" className={classes.container}>
					<Typography
						variant="h4"
						color="primary"
						align="center"
						gutterBottom
						wrap
					>
						Supports Team
					</Typography>
					<Grid
						container
						direction="row"
						justify="space-around"
						alignItems="center"
						wrap
						className={classes.gridContainer}
					>
						{data.map((mentor, index) => {
							return <Card key={index} data={mentor} />;
						})}
					</Grid>
				</div>
			</Fragment>
		);
	}
}
export default withStyles(styles)(SupportTeam);
