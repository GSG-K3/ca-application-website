import React, { Fragment, Component } from 'react';
import NavBar from '../../Components/NavBar';
import { withStyles } from '@material-ui/styles';
import style from './style';
import Stepper from '../../Components/Stepper';
import { Grid } from '@material-ui/core';
import InfoTextFeilds from '../../Components/InfoTextFeilds';
import PartTwo from '../../Components/PartTwo';
import NextBtn from '../../Components/NextBtn';
import axios from 'axios';

class PersonalInfo extends Component {
	state = {
		activeStep: 0,
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		motivation:
			'Tell us - in your own words - about your background and why you want to be considered for this program. This is your opportunity to tell your story and make your application unique. Please write at least 5 sentences.',
		gender: '',
		age: '',
		WestBankCity: '',
		GazaCity: '',
	};

	handleNext = () => {
		axios
			.post('/api/user/:userId/personal-info', this.state)
			.then((data) => {
				if (data.data === 'yes')
					this.setState((prevState) => {
						return { activeStep: prevState.activeStep + 1 };
					});
			})
			.catch((err) => console.log(err));
	};

	handleBack = () => {
		this.setState((prevState) => {
			return { activeStep: prevState.activeStep - 1 };
		});
	};

	handleChange = (event) => {
		let { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleReset = () => {
		this.setState({ activeStep: 0 });
	};
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<NavBar matchPath={this.props.match} history={this.props.history} />
				<Grid
					Container
					direction="column"
					alignItems="normal"
					className={classes.container}
					spacing={2}
				>
					<Grid item wrap>
						<Stepper activeStep={this.state.activeStep} />
					</Grid>
					<Grid wrap item item container direction="row" alignItems="center">
						<img
							src={require('../../assets/man.png')}
							alt="man pic"
							className={classes.img}
						/>
						<InfoTextFeilds
							handleChange={this.handleChange}
							state={this.state.motivation}
						/>
					</Grid>
					<Grid wrap item container direction="row" justify="flex-end">
						<PartTwo handleChange={this.handleChange} state={this.state} />
						<img
							src={require('../../assets/girlinfo.png')}
							alt="man pic"
							className={classes.img}
						/>
					</Grid>
					<Grid item container justify="center" className={classes.NextGrid}>
						<NextBtn
							handleBack={this.handleBack}
							handleNext={this.handleNext}
							handleReset={this.handleReset}
							activeStep={this.state.activeStep}
						/>
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default withStyles(style)(PersonalInfo);
