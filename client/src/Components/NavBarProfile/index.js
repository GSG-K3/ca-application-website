import React, { Fragment } from 'react';
import myStyles from './style';
import { Grid, IconButton, Typography, Avatar } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import classNames from 'classnames';
import TemporaryDrawerProfile from '../TemporaryDrawerProfile';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const NavBarProfile = () => {
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
				<TemporaryDrawerProfile />
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
						<label htmlFor="icon-button-file">
							<IconButton
								aria-label="notification button"
								component="span"
								className={classes.notiBtn}
							>
								<NotificationsActiveIcon />
							</IconButton>
						</label>
						<label htmlFor="icon-button-file">
							<IconButton
								aria-label="profile button"
								component="span"
								className={classes.notiBtn}
							>
								<ArrowDropDownIcon />
							</IconButton>
						</label>
						<Avatar
							alt="Cindy Baker"
							src={require('./girl.png')}
							className={classes.avatarPic}
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
