import React, { Fragment } from 'react';
import {
	Drawer,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	Link,
} from '@material-ui/core';
import useStyles from './style';
import {
	Home,
	Info,
	BlurLinear,
	People,
	ContactMail,
	AssignmentInd,
} from '@material-ui/icons';

import MenuBar from '../MenuBar';

export default function TemporaryDrawer() {
	const preventDefault = (event) => event.preventDefault();

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
							<Link href="/home" onClick={preventDefault}>
								<ListItemText primary="Home" />
							</Link>
						) : index === 1 ? (
							<Link href="/about" onClick={preventDefault}>
								<ListItemText primary="About" />
							</Link>
						) : index === 2 ? (
							<Link href="/steps" onClick={preventDefault}>
								<ListItemText primary="Steps" />
							</Link>
						) : index === 3 ? (
							<Link href="/support-team" onClick={preventDefault}>
								<ListItemText primary="Mentors" />
							</Link>
						) : index === 4 ? (
							<Link href="/contact-us" onClick={preventDefault}>
								<ListItemText primary="Contact" />
							</Link>
						) : (
							<p></p>
						)}
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				<ListItem button key={'login'}>
					<ListItemIcon>
						<AssignmentInd color="primary" />
					</ListItemIcon>
					<Link href="/login" onClick={preventDefault}>
						<ListItemText primary="Login" />
					</Link>
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
