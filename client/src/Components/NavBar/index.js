import React, { Fragment, Component } from 'react';
import myStyles from './style';
import { Grid, Typography, Link } from '@material-ui/core';
import TemporaryDrawer from '../TemporaryDrawer';

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
				<Grid item lg={1}></Grid>
				<Grid container xs={12} md={3}>
					<img
						className={classes.image}
						src={require('./gsg_logo.png')}
						alt="logopic"
					/>
				</Grid>
				<TemporaryDrawer />
				<Grid
					item
					xs={12}
					md={8}
					wrap
					alignContent="flex-end"
					className={classes.menuGrind}
				>
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
