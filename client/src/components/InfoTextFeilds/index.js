import React, { Fragment, Component } from 'react';
import style from './style';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

class InfoTextFeilds extends Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		motivation:
			'Tell us - in your own words - about your background and why you want to be considered for this program. This is your opportunity to tell your story and make your application unique. Please write at least 5 sentences.',
	};
	handleChange = (event) => {
		let { name, value } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<form className={classes.form}>
					<div className={classes.textfields}>
						<TextField
							name="firstName"
							required
							id="outlined-basic"
							label="First Name"
							variant="outlined"
							onChange={this.handleChange}
						/>
						<TextField
							name="lastName"
							required
							id="outlined-basic"
							label="Last Name"
							variant="outlined"
							onChange={this.handleChange}
						/>
					</div>
					<div className={classes.textfields}>
						<TextField
							name="email"
							required
							id="outlined-basic"
							label="Email"
							variant="outlined"
							onChange={this.handleChange}
						/>
						<TextField
							name="phone"
							required
							type="number"
							id="outlined-basic"
							label="Phone Number"
							variant="outlined"
							onChange={this.handleChange}
						/>
					</div>
					<div className={classes.motivSection}>
						<Typography align="center" gutterBottom variant="h6">
							What is your motivation for joining the Code Academy ?
						</Typography>
						<TextField
							name="motivation"
							id="4"
							label={this.state.motivation}
							multiline
							rowsMax={10}
							onChange={this.handleChange}
							variant="outlined"
							className={classes.box}
							inputProps={{ style: { height: 60 } }}
							InputLabelProps={{ style: { paddingRight: 17 } }}
						/>
					</div>
				</form>
			</Fragment>
		);
	}
}

export default withStyles(style)(InfoTextFeilds);
