import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { Button } from '@material-ui/core';
import axios from 'axios';
import TextFieldValidation from '../../components/LoginForm';

class Login extends Component {
	state = {
		email: '',
		password: '',
		loginError: '',
	};

	handleChange = (event) => {
		let { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		const { email, password } = this.state;
		axios
			.post(
				'/api/login',
				{ user: { email, password } },
				{ withCredentials: true },
			)
			.then((data) => {
				let info = data.data;
				let userId = info.user_id;

				if (typeof info === 'string') {
					return this.setState({ loginError: info });
				} else this.props.history.push(`/user/${userId}`);
			})
			.catch((err) => console.log(err));
		event.preventDefault();
	};

	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.text} id="login">
					<form className={classes.root} noValidate autoComplete="off">
						<TextFieldValidation
							onChange={this.handleChange}
							error={this.state.loginError}
						/>
						<Button
							type="submit"
							onClick={this.handleSubmit}
							variant="contained"
							color="primary"
						>
							Login
						</Button>
					</form>
				</div>
			</Fragment>
		);
	}
}
export default withStyles(styles)(Login);
