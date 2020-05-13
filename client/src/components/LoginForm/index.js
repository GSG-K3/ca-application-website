import React, { Fragment, Component } from 'react';
import { TextField } from '@material-ui/core';

class TextFieldValidation extends Component {
	state = {};
	render() {
		let { onChange, error } = this.props;
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
					/>
				) : (
					<TextField
						id="standard-basic"
						label="email"
						name="email"
						type="email"
						onChange={onChange}
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
					/>
				) : (
					<TextField
						label="password"
						type="password"
						name="password"
						autoComplete="current-password"
						onChange={onChange}
					/>
				)}
				{error.includes('no user exist in the db') ? (
					<h6>email or password incorrect</h6>
				) : (
					<h6></h6>
				)}
			</Fragment>
		);
	}
}

export default TextFieldValidation;
