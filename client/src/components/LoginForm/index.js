import React, { Fragment, Component } from 'react';
import { TextField, Typography } from '@material-ui/core';
import style from './style';
import { withStyles } from '@material-ui/styles';

class TextFieldValidation extends Component {
	state = {};
	render() {
		let { onChange, error, classes } = this.props;

		return (
			<Fragment>
				{error.includes(' "email" is not allowed to be empty') ? (
					<TextField
						id="standard-basic"
						err
						helperText="Please insert your email"
						label="email"
						name="email"
						type="email"
						onChange={onChange}
						className={classes.textFiled}
						inputProps={{ style: { width: 275 } }}
					/>
				) : error.includes('valid email') ? (
					<TextField
						id="standard-basic"
						err
						helperText="incorrect email"
						label="email"
						name="email"
						type="email"
						onChange={onChange}
						className={classes.textFiled}
						inputProps={{ style: { width: 275 } }}
					/>
				) : (
					<TextField
						id="standard-basic"
						label="email"
						name="email"
						type="email"
						onChange={onChange}
						className={classes.textFiled}
						inputProps={{ style: { width: 275 } }}
					/>
				)}
				{error.includes('"password" is not allowed to be empty') ? (
					<TextField
						label="password"
						err
						helperText="Please fill this field"
						type="password"
						name="password"
						autoComplete="current-password"
						onChange={onChange}
						className={classes.textFiled}
						inputProps={{ style: { width: 275 } }}
					/>
				) : error.includes(
						'"password" length must be at least 7 characters long',
				  ) ? (
					<TextField
						label="password"
						err
						helperText="password should be at least 7 charachters long"
						type="password"
						name="password"
						autoComplete="current-password"
						onChange={onChange}
						className={classes.textFiled}
						inputProps={{ style: { width: 275 } }}
					/>
				) : (
					<TextField
						label="password"
						type="password"
						name="password"
						autoComplete="current-password"
						onChange={onChange}
						className={classes.textFiled}
						inputProps={{ style: { width: 275 } }}
					/>
				)}
				{error.includes('no user exist in the db') ? (
					<Typography
						color="primary"
						gutterBottom
						className={classes.incorrect}
					>
						email or password are incorrect!
					</Typography>
				) : null}
			</Fragment>
		);
	}
}

export default withStyles(style)(TextFieldValidation);
