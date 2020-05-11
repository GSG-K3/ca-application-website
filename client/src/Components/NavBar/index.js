import React, { Fragment } from 'react';
import myStyles from './style';
import { Grid, IconButton, Typography, Avatar } from '@material-ui/core';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import classNames from 'classnames';
import TemporaryDrawer from '../TemporaryDrawer';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import DropMenu from '../DropMenu';

const NavBarProfile = (props) => {
	const classes = myStyles();

	const { matchPath } = props;

	return (
		<Fragment>
			<Grid
				container
				direction="row"
				alignItems="center"
				className={classes.Container}
			>
				<Grid item container xs={6} md={5} className={classes.logoGrid}>
					<img
						className={classes.logo}
						src={require('../../assets/gsg_logo.png')}
						alt="logopic"
					/>
				</Grid>
				<Grid
					item
					xs={0}
					md={6}
					wrap
					lg={6}
					className={classes.menu}
					classes={
						matchPath.path === '/' || matchPath.path === '/home'
							? null
							: { root: classes.hideMenu }
					}
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
				<Grid
					item
					xs={0}
					md={matchPath.path === '/' || matchPath.path === '/home' ? 0 : 6}
					classes={
						matchPath.path === '/' || matchPath.path === '/home'
							? { root: classes.hideMenu }
							: null
					}
					className={classes.profileGrid}
				>
					<label htmlFor="icon-button-file">
						<IconButton
							aria-label="notification button"
							component="span"
							className={classes.notiBtn}
						>
							<NotificationsActiveIcon />
						</IconButton>
					</label>
					<DropMenu btnStyle={classes.notiBtn} />
					<Avatar
						alt="Cindy Baker"
						src={require('../../assets/girl.png')}
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
				</Grid>
				<Grid container item xs={6} md={1} lg={0} className={classes.menuBtn}>
					<TemporaryDrawer path={matchPath} />
				</Grid>
			</Grid>
		</Fragment>
	);
};

export default NavBarProfile;
