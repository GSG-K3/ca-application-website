import React, { Component, Fragment } from 'react';
import style from './style';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import logo from '../../img/logo.svg';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { FormHelperText } from '@material-ui/core';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}
class login extends Component {
	state = {
		email: '',
		emailError: '',
		password: '',
		passwordError: '',
	};

	change = (e) => {
		// console.log(e.target.name);
		// console.log(e.target.value);
		this.props.onChange({ [e.target.name]: e.target.value });
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	validate = () => {
		let isError = false;
		const errors = {
			emailError: '',
			passwordError: '',
		};
		if (this.state.password.length < 8) {
			isError = true;
			errors.passwordError = '* password atleast 8 characters long';
		}
		if (this.state.email.indexOf('@') === -1) {
			isError = true;
			errors.emailError = ' * Requires valid email';
		
		}

		if (isError) {
			this.setState({
				emailError: errors.emailError,
				passwordError: errors.passwordError,
			});
		}
		return isError;
	};

	onSubmit = (e) => {
		e.preventDefault();
		const err = this.validate();

		if (!err) {
			this.setState({
				email: '',
				emailError: '',
				password: '',
				passwordError: '',
			});
			this.props.onChange({
				email: '',
				password: '',
			});
		}
	};

	render() {
		const { classes } = this.props;
		const { emailError, passwordError } = this.state;

		return (
			<Grid container component="main" className={classes.root}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} className={classes.image} />
				<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
						<img src={logo} />
						<Typography component="h1" variant="h5">
							Sign in
						</Typography>
						<form className={classes.form} noValidate>
							<div>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									autoFocus
									value={this.state.email}
									onChange={(e) => this.change(e)}
								/>
								{emailError && (
									<FormHelperText className={classes.textErorr}  error={true}>{emailError}</FormHelperText>
								)}
							</div>
							<div>
								<TextField
									variant="outlined"
									margin="normal"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
									value={this.state.password}
									onChange={(e) => this.change(e)}
								/>
								{passwordError && (
									<FormHelperText  className={classes.textErorr}  error={true}>{passwordError}</FormHelperText>
								)}
							</div>
							<FormControlLabel
								control={<Checkbox value="remember" color="primary" />}
								label="Remember me"
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={(e) => this.onSubmit(e)}
							>
								Sign In
							</Button>
							<Grid container>
								<Grid item xs>
									<Link href="#" variant="body2">
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link href="#" variant="body2">
										{"Don't have an account? Sign Up"}
									</Link>
								</Grid>
							</Grid>
							<Box mt={5}>
								<Copyright />
							</Box>
						</form>
					</div>
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(style)(login);
