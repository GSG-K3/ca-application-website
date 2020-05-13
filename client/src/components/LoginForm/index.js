import React, { Fragment, Component } from 'react';
import { TextField, Typography } from '@material-ui/core';
import style from './style';
import { withStyles } from '@material-ui/styles';

class TextFieldValidation extends Component {
	state = {};
	render() {
		let { onChange, emailError, passwordError, classes } = this.props;

		return (
			<Fragment>
				<TextField
					id="standard-basic"
					helperText={emailError}
					placeholder="email"
					name="email"
					type="email"
					onChange={onChange}
					className={classes.textFiled}
					inputProps={{ className: classes.fieldStyle }}
					InputProps={{ disableUnderline: true }}
				/>
				<TextField
					placeholder="password"
					type="password"
					name="password"
					helperText={passwordError}
					autoComplete="current-password"
					onChange={onChange}
					className={classes.textFiled}
					inputProps={{ className: classes.fieldStyle }}
					InputProps={{ disableUnderline: true }}
				/>
			</Fragment>
		);
	}
}

export default withStyles(style)(TextFieldValidation);
{
	/* {error.includes('no user exist in the db') ? ( */
}
// 	<Typography
// 		color="primary"
// 		gutterBottom
// 		className={classes.incorrect}
// 	>
// 		email or password are incorrect!
// 	</Typography>
