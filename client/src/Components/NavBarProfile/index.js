import React, { Fragment } from 'react';
import myStyles from './style';
import { Grid, IconButton, Typography, Link, Avatar } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import classNames from 'classnames';
import TemporaryDrawer from '../TemporaryDrawer';

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
				<Grid item lg={1}></Grid>
				<Grid
					item
					container
					xs={12}
					md={2}
					alignContent="flex-start"
					className={classes.imageGrid}
				>
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
					md={9}
					wrap
					alignContent="flex-end"
					className={classes.menuGrid}
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
					</Typography>
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default NavBarProfile;
