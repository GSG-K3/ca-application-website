import React, { Fragment } from 'react';
import myStyles from './style';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

const MenuBar = (props) => {
	const classes = myStyles();
	return (
		<Fragment>
			<IconButton
				edge="end"
				aria-label="menu"
				color="primary"
				className={classes.btnMenu}
				onClick={props.onClick}
			>
				<MenuIcon classes={{ root: classes.root }} />
			</IconButton>
		</Fragment>
	);
};

export default MenuBar;
