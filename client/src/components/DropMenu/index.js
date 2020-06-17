import React, { Fragment, Component } from 'react';
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
	SentimentSatisfied,
} from '@material-ui/icons';
import style from './style';
import Dialog from '../Dialog';

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

class DropMenu extends Component {
	state = {
		anchorEl: null,
		open: false,
		userId: this.props.match.params.userId,
	};

	handleClick = (event) => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		console.log('here');
		this.setState({ anchorEl: null });
	};

	handleMenuClick = (event, index) => {
		if (index === 1) {
			return this.props.history.push(`/user/${this.state.userId}/profile`);
		} else if (index === 3) {
			return this.props.history.push('/');
		} else this.setState({ open: true });
		event.preventDefault();
	};
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<label htmlFor="icon-button-file">
					<IconButton
						aria-label="profile button"
						component="span"
						className={this.props.btnStyle}
						onClick={this.handleClick}
					>
						<ArrowDropDownIcon />
					</IconButton>
				</label>
				<StyledMenu
					id="customized-menu"
					anchorEl={this.state.anchorEl}
					keepMounted
					open={Boolean(this.state.anchorEl)}
					onClose={this.handleClose}
				>
					<MenuItem
						className={classes.StyledMenuItem}
						onClick={(event) => this.handleMenuClick(event, 1)}
					>
						<ListItemIcon>
							<AccountBoxIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</MenuItem>
					<MenuItem
						className={classes.StyledMenuItem}
						onClick={(event) => this.handleMenuClick(event, 2)}
					>
						<ListItemIcon>
							<HighlightOffIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="Delete Account" />
					</MenuItem>
					<MenuItem
						className={classes.StyledMenuItem}
						onClick={(event) => this.handleMenuClick(event, 3)}
					>
						<ListItemIcon>
							<ExitToAppIcon fontSize="small" />
						</ListItemIcon>
						<ListItemText primary="Sign Out" />
						{this.state.open ? <Dialog /> : null}
					</MenuItem>
				</StyledMenu>
			</Fragment>
		);
	}
}
export default withStyles(style)(DropMenu);
