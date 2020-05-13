import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AlertDialog extends Component {
	state = { open: true };

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};
	render() {
		return (
			<Fragment>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{'Are you Sure ?'}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							We would hate to see you go, but if you are completely sure, we
							will close your account and delete your application. Remember:
							there is no going back!
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Delete my account
						</Button>
						<Button onClick={this.handleClose} color="primary" autoFocus>
							Cancel
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}
export default AlertDialog;
