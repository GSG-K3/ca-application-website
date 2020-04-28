import React, { Fragment, Component } from 'react';
import axios from 'axios';
import myStyles from './style';
import { withStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Typography, Link, Avatar } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import classNames from 'classnames';

const NavBarProfile = () => {
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
				<Grid item md={1}></Grid>
				<Grid item md={2} alignContent="flex-start">
					<img
						className={classes.image}
						src={require('./gsg_logo.png')}
						alt="logopic"
					/>
				</Grid>
				<Grid item md={2}></Grid>
				<Grid item md={4} wrap alignContent="flex-end">
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
					</Typography>
				</Grid>
				<Grid item container md={2} wrap direction="row">
					<label htmlFor="icon-button-file">
						<IconButton
							className={classes.iconNotification}
							aria-label="notification button"
							component="span"
						>
							<NotificationsActiveIcon />
						</IconButton>
					</label>
					<label htmlFor="icon-button-file">
						<IconButton
							className={classes.iconProfile}
							aria-label="profile button"
							component="span"
						>
							<ArrowDropDownIcon />
						</IconButton>
					</label>
					<Avatar
						alt="Cindy Baker"
						src={require('./girl.png')}
						className={classes.large}
					/>
					<Typography
						className={classNames(classes.typography, classes.text)}
						variant="h6"
					>
						Hi,
					</Typography>
					<Typography
						className={classNames(classes.typography, classes.text)}
						variant="h5"
					>
						Nicole
					</Typography>
				</Grid>
				<Grid item md={1}></Grid>
			</Grid>
		</Fragment>
	);
};

export default NavBarProfile;
