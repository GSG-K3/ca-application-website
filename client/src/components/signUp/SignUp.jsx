import React, { Fragment, Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Styles from './styles';
import logo from '../../assets/logo-GsG.svg';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';

class SignUp extends Component {
	componentDidMount() {
		axios
			.post('/api/signUp')
			.then((response) => console.log(response))
			.catch((error) => console.log(error));
	}

	render() {
		const { classes } = this.props;

		const Copyright = () => {
			return (
				<Typography variant="body2" color="textSecondary" align="center">
					{'Copyright © '}
					<Link color="inherit" href="https://gazaskygeeks.com/">
						GSG Community
					</Link>{' '}
					{new Date().getFullYear()}
					{'.'}
				</Typography>
			);
		};
		return (
			<Fragment>
				<Grid container component="main" className={classes.root}>
					<CssBaseline />
					<Grid item xs={false} sm={4} md={7} className={classes.image} />
					<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
					<div className={classes.paper}>
							<img src={logo} />
							<Typography color={'green[500]'} component="h1" variant="h5">
								Create Account
							</Typography>
							<form className={classes.form} noValidate>
							<Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
								<TextField
									name="firstName"
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoComplete="fname"
									autoFocus
								/>
								 </Grid>
								 <Grid item xs={12} sm={6}>
								<TextField
									name="lastName"
									variant="outlined"
									margin="normal"
									required
									fullWidth
									id="lastName"
									label="Last Name"
									autoComplete="lname"
									autoFocus
								/>
								</Grid>
								<Grid item xs={12}>
								<TextField
									name="email"
									variant="outlined"
									marign="normal"
									required
									fullWidth
									id="email"
									label="Email Address"
									autoComplete="email"
									autoFocus
								/>
								</Grid>
								<Grid item xs={12}>
								<TextField
									name="password"
									variant="outlined"
									marign="normal"
									required
									fullWidth
									id="password"
									label="Password"
									type="password"
									autoComplete="current-password"
								/>
								</Grid>
								<Grid item xs={12}>
								<FormControlLabel
									control={<Checkbox value="remember" color="primary" />}
									label="Remember me"
								/>
								</Grid>
								</Grid>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
								>
									Sign Up
								</Button>
								<Grid container justify="flex-end">
									<Grid item xs>
										<Link href="#" variant="body2">
											Already have an account? Sign in
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
			</Fragment>
		);
	}
}

export default withStyles(Styles)(SignUp);

{
	/* <Grid item xs={12}>
  <FormControlLabel
    control={
      <Checkbox value="allowExtraEmails" color="primary" />
    }
    label="I want to receive inspiration, marketing promotions and updates via email."
  />
</Grid> */
}
