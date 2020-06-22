import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { Button, Grid, Typography, Link } from '@material-ui/core';
import axios from 'axios';
import TextFieldValidation from '../../components/LoginForm';

class Login extends Component {
	state = {
		email: '',
		password: '',
		loginError: '',
	};
	componentDidMount() {
		const isLoggedIn = localStorage.getItem('isLoggedIn');
		if (isLoggedIn) {
			console.log("loginnnnn screeen", isLoggedIn)
				this.props.history.push('/');
		}
}

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
				<div className={classes.body} id="login">
					<img
						src={require('../../assets/Polygon.png')}
						alt="polygon image"
						className={classes.polygon}
					/>
					<Grid
						wrap
						className={classes.container}
						container
						direction="row"
						justify="center"
						alignItems="center"
						spacing={3}
					>
						<Grid
							item
							wrap
							container
							justify="center"
							alignItems="center"
							xl={6}
							className={classes.loginGrid}
						>
							<Grid item>
								<img
									src={require('../../assets/logo-GsG.svg')}
									alt="GSG logo"
								/>
							</Grid>
							<Grid item>
								<Typography color="primary" variant="h6">
									please sign in to your account
								</Typography>
							</Grid>
							<Grid item container alignItems="center" justify="center">
								<form className={classes.root} noValidate autoComplete="off">
									<Grid item container direction="column" alignItems="center">
										<TextFieldValidation
											onChange={this.handleChange}
											error={this.state.loginError}
										/>
									</Grid>
									<Grid item>
										<Link href="#" color="secondary">
											Forget your password?
										</Link>
									</Grid>
									<Grid item>
										<Button
											type="submit"
											onClick={this.handleSubmit}
											variant="contained"
											color="primary"
											className={classes.btn}
										>
											Log in
										</Button>
									</Grid>
								</form>
							</Grid>
						</Grid>
						<Grid item wrap xl={6}>
							<img src={require('../../assets/loginpic.png')} alt="login pic" />
						</Grid>
					</Grid>
				</div>
			</Fragment>
		);
	}
}
export default withStyles(styles)(Login);
