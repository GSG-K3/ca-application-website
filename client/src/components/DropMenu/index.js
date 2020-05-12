import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
	Menu,
	MenuItem,
	ListItemIcon,
	ListItemText,
	IconButton,
} from '@material-ui/core';
import {
	ArrowDropDown as ArrowDropDownIcon,
	ExitToApp as ExitToAppIcon,
	HighlightOff as HighlightOffIcon,
	AccountBox as AccountBoxIcon,
} from '@material-ui/icons';
import style from './style';

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5',
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center',
		}}
		{...props}
	/>
));

export default function CustomizedMenus(props) {
	const classes = style();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Fragment>
			<label htmlFor="icon-button-file">
				<IconButton
					aria-label="profile button"
					component="span"
					className={props.btnStyle}
					onClick={handleClick}
				>
					<ArrowDropDownIcon />
				</IconButton>
			</label>
			<StyledMenu
				id="customized-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem className={classes.StyledMenuItem}>
					<ListItemIcon>
						<AccountBoxIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText primary="Profile" />
				</MenuItem>
				<MenuItem className={classes.StyledMenuItem}>
					<ListItemIcon>
						<HighlightOffIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText primary="Delete Account" />
				</MenuItem>
				<MenuItem className={classes.StyledMenuItem}>
					<ListItemIcon>
						<ExitToAppIcon fontSize="small" />
					</ListItemIcon>
					<ListItemText primary="Sign Out" />
				</MenuItem>
			</StyledMenu>
		</Fragment>
	);
}
