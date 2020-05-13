import React, { Fragment, Component } from 'react';
import style from './style';
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

class InfoTextFeilds extends Component {
	render() {
		const { classes, handleChange, state } = this.props;
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
							onChange={handleChange}
						/>
						<TextField
							name="lastName"
							required
							id="outlined-basic"
							label="Last Name"
							variant="outlined"
							onChange={handleChange}
						/>
					</div>
					<div className={classes.textfields}>
						<TextField
							name="email"
							required
							id="outlined-basic"
							label="Email"
							variant="outlined"
							onChange={handleChange}
						/>
						<TextField
							name="phone"
							required
							type="number"
							id="outlined-basic"
							label="Phone Number"
							variant="outlined"
							onChange={handleChange}
						/>
					</div>
					<div className={classes.motivSection}>
						<Typography align="center" gutterBottom variant="h6">
							What is your motivation for joining the Code Academy ?
						</Typography>
						<TextField
							name="motivation"
							id="4"
							label={state}
							multiline
							rowsMax={10}
							onChange={handleChange}
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
