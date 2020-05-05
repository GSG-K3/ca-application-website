import React, { Fragment } from 'react';
import {
	Drawer,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	Link as RouterLink,
} from '@material-ui/core';
import { Link } from 'react-scroll';
import useStyles from './style';
import {
	Home,
	Info,
	BlurLinear,
	People,
	ContactMail,
	AssignmentInd,
	ExitToApp,
} from '@material-ui/icons';

import MenuBar from '../MenuBar';

export default function TemporaryDrawer() {
	const classes = useStyles();
	const [state, setState] = React.useState({
		right: false,
		link: '/',
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={classes.list}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{['Home', 'About', 'Steps', 'Mentors', 'Contact'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>
							{index === 0 ? (
								<Home color="primary" />
							) : index === 1 ? (
								<Info color="primary" />
							) : index === 2 ? (
								<BlurLinear color="primary" />
							) : index === 3 ? (
								<People color="primary" />
							) : index === 4 ? (
								<ContactMail color="primary" />
							) : (
								<p></p>
							)}
						</ListItemIcon>
						{index === 0 ? (
							<Link
								activeClass="active"
								to="home"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className={classes.link}
							>
								<ListItemText primary="Home" className={classes.link} />
							</Link>
						) : index === 1 ? (
							<Link
								activeClass="active"
								to="about"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className={classes.link}
							>
								<ListItemText primary="About" />
							</Link>
						) : index === 2 ? (
							<Link
								activeClass="active"
								to="steps"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className={classes.link}
							>
								<ListItemText primary="Steps" />
							</Link>
						) : index === 3 ? (
							<Link
								activeClass="active"
								to="mentors"
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
								className={classes.link}
							>
								<ListItemText primary="Mentors" />
							</Link>
						) : index === 4 ? (
							<RouterLink href="/contact-us" className={classes.link}>
								<ListItemText primary="Contact" />
							</RouterLink>
						) : (
							<p></p>
						)}
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				<ListItem button key={'profile'}>
					<ListItemIcon>
						<AssignmentInd color="primary" />
					</ListItemIcon>
					<RouterLink href="/profile" className={classes.link}>
						<ListItemText primary="Profile" />
					</RouterLink>
				</ListItem>
				<ListItem button key={'deleteAccount'}>
					<ListItemIcon>
						<AssignmentInd color="primary" />
					</ListItemIcon>
					<RouterLink href="/delete-account" className={classes.link}>
						<ListItemText primary="Delete Account" />
					</RouterLink>
				</ListItem>
				<ListItem button key={'logout'}>
					<ListItemIcon>
						<ExitToApp color="primary" />
					</ListItemIcon>
					<RouterLink href="/login" className={classes.link}>
						<ListItemText primary="Log Out" />
					</RouterLink>
				</ListItem>
			</List>
		</div>
	);
	const anchor = 'right';
	return (
		<div>
			<Fragment key={anchor}>
				<MenuBar onClick={toggleDrawer(anchor, true)} />
				<Drawer
					anchor={anchor}
					open={state[anchor]}
					onClose={toggleDrawer(anchor, false)}
				>
					{list(anchor)}
				</Drawer>
			</Fragment>
		</div>
	);
}
