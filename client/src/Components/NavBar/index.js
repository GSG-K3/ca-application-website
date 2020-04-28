import React, { Fragment, Component } from 'react';
import axios from 'axios';
import myStyles from './style';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Link } from '@material-ui/core';

const NavBar = () => {
	const classes = myStyles();
	const preventDefault = (event) => event.preventDefault();
	return (
		<Fragment>
			<Grid
				container
				direction="row"
				alignItems="center"
				className={classes.grid}
			>
				<Grid item xs={6} xl={6}>
					<img
						className={classes.image}
						src={require('./gsg_logo.png')}
						alt="logopic"
					/>
				</Grid>

				<Grid item xs={6} xl={6} wrap>
					<Typography className={classes.typography}>
						<Link
							className={classes.link}
							href="/home"
							underline="hover"
							onClick={preventDefault}
						>
							Home
						</Link>

						<Link
							className={classes.link}
							href="/about"
							onClick={preventDefault}
						>
							About
						</Link>

						<Link
							className={classes.link}
							href="/steps"
							onClick={preventDefault}
						>
							Steps
						</Link>

						<Link
							className={classes.link}
							href="/mentors"
							onClick={preventDefault}
						>
							Mentors
						</Link>

						<Link
							className={classes.link}
							href="/contact-us"
							onClick={preventDefault}
						>
							Contact
						</Link>

						<Link
							className={classes.link}
							href="/login"
							onClick={preventDefault}
						>
							Login
						</Link>
					</Typography>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default NavBar;
