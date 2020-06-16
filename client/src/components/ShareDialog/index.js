import React from 'react';
import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';
import myStyles from './style';

export default function FormDialog() {
	const [open, setOpen] = React.useState(false);
	const classes = myStyles();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				variant="contained"
				color="secondary"
				className={classes.btn}
				onClick={handleClickOpen}
			>
				Share
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Share</DialogTitle>
				<DialogContent>
					<DialogContentText>
						To Share our Program among your friends,Please copy the link
					</DialogContentText>
					<TextField
					id="name"
					defaultValue="https://gazaskygeeks.com/code-academy-application-gaza/"
					fullWidth
				/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Cancel
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
