import React, { Component, Fragment } from 'react';
import style from './style';
import { Button, Card, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
class About extends Component {
	state = {};
	handleClick = (event) => {
		event.preventDefault();
	};
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="center"
					className={classes.gridContainer}
				>
					<Grid item wrap>
						<img
							src={require('../../assets/pic.png')}
							alt="aboutpic"
							className={classes.aboutImage}
						/>
					</Grid>
					<div id="about">
						<Grid
							item
							container
							direction="column"
							justify="center"
							alignItems="center"
							wrap
							spacing={2}
						>
							<Card className={classes.card}>
								<Grid item wrap align="center">
									<Typography
										color="secondary"
										variant="h4"
										component="h2"
										gutterBottom
										align="center"
										className={classes.header}
									>
										Code Academy Program
									</Typography>
									<Typography
										variant="h5"
										align="center"
										gutterBottom
										className={classes.bodyText}
									>
										This program is for anyone truly serious about putting in
										the time, effort, and determination to become a junior web
										developer ready to work in a tech company. A university
										degree or prior technical experience is not required.
									</Typography>

									<Typography variant="h5" align="center" gutterBottom>
										The goal of the Code Academy is to accelerate the growth of
										globally competitive coding talent in Palestine. We believe
										that by helping Palestinian youth build high-tech and modern
										skills to participate in the exponentially growing tech
										sector, they will have a sustainable and long-term pathway
										to high-quality employment.
									</Typography>
								</Grid>

								<Grid item wrap align="center">
									<Button
										variant="contained"
										className={classes.btn}
										onClick={this.handleClick}
									>
										<RouterLink to="/register" className={classes.link}>
											Join us
										</RouterLink>
									</Button>
								</Grid>
							</Card>
						</Grid>
					</div>
				</Grid>
			</Fragment>
		);
	}
}

export default withStyles(style)(About);
