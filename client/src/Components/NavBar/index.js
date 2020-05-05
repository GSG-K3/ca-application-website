import React, { Fragment } from 'react';
import myStyles from './style';
import { Grid, Typography } from '@material-ui/core';
import TemporaryDrawer from '../TemporaryDrawer';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
	const classes = myStyles();
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
					className={classes.menuGrid}
				>
					<Typography className={classes.typography}>
						<Link
							activeClass="active"
							to="home"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							className={classes.link}
						>
							Home
						</Link>
						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							className={classes.link}
						>
							About
						</Link>

						<Link
							activeClass="active"
							to="steps"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							className={classes.link}
						>
							Steps
						</Link>

						<Link
							activeClass="active"
							to="mentors"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							className={classes.link}
						>
							Mentors
						</Link>

						<RouterLink to="/contact-us" className={classes.link}>
							Contact
						</RouterLink>
						<RouterLink to="/login" className={classes.link}>
							Login
						</RouterLink>
					</Typography>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default NavBar;
