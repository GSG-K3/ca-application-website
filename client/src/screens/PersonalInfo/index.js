import React, { Fragment } from 'react'
import {Grid, Typography, TextField, FormControlLabel, Checkbox} from '@material-ui/core'



export default function AppForm(){
return(
	<Fragment>
 <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
				</Grid>
				<Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
				</Grid>
				<Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>

	</Fragment>
)






}


























// import React, { Fragment, Component } from 'react';
// import NavBar from '../../components/NavBar';
// import { withStyles } from '@material-ui/styles';
// import style from './style';
// import Stepper from '../../components/Stepper';
// import { Grid } from '@material-ui/core';
// import InfoTextFeilds from '../../components/InfoTextFeilds';
// import PartTwo from '../../components/PartTwo';
// import NextBtn from '../../components/NextBtn';
// import axios from 'axios';

// class PersonalInfo extends Component {
// 	state = {
// 		activeStep: 0,
// 		firstName: '',
// 		lastName: '',
// 		email: '',
// 		phone: '',
// 		motivation:
// 			'Tell us - in your own words - about your background and why you want to be considered for this program. This is your opportunity to tell your story and make your application unique. Please write at least 5 sentences.',
// 		gender: '',
// 		age: '',
// 		WestBankCity: '',
// 		GazaCity: '',
// 	};

// 	handleNext = () => {
// 		axios
// 			.post('/api/user/:userId/personal-info', this.state)
// 			.then((data) => {
// 				if (data.data === 'yes')
// 					this.setState((prevState) => {
// 						return { activeStep: prevState.activeStep + 1 };
// 					});
// 			})
// 			.catch((err) => console.log(err));
// 	};

// 	handleBack = () => {
// 		this.setState((prevState) => {
// 			return { activeStep: prevState.activeStep - 1 };
// 		});
// 	};

// 	handleChange = (event) => {
// 		let { name, value } = event.target;
// 		this.setState({ [name]: value });
// 	};

// 	handleReset = () => {
// 		this.setState({ activeStep: 0 });
// 	};
// 	render() {
// 		const { classes } = this.props;
// 		return (
// 			<Fragment>
// 				<NavBar matchPath={this.props.match} history={this.props.history} />
// 				<Grid
// 					Container
// 					direction="column"
// 					alignItems="normal"
// 					className={classes.container}
// 					spacing={2}
// 				>
// 					<Grid item wrap>
// 						<Stepper activeStep={this.state.activeStep} />
// 					</Grid>
// 					<Grid wrap item item container direction="row" alignItems="center">
// 						<img
// 							src={require('../../assets/man.png')}
// 							alt="man pic"
// 							className={classes.img}
// 						/>
// 						<InfoTextFeilds
// 							handleChange={this.handleChange}
// 							state={this.state.motivation}
// 						/>
// 					</Grid>
// 					<Grid wrap item container direction="row" justify="flex-end">
// 						<PartTwo handleChange={this.handleChange} state={this.state} />
// 						<img
// 							src={require('../../assets/girlinfo.png')}
// 							alt="man pic"
// 							className={classes.img}
// 						/>
// 					</Grid>
// 					<Grid item container justify="center" className={classes.NextGrid}>
// 						<NextBtn
// 							handleBack={this.handleBack}
// 							handleNext={this.handleNext}
// 							handleReset={this.handleReset}
// 							activeStep={this.state.activeStep}
// 						/>
// 					</Grid>
// 				</Grid>
// 			</Fragment>
// 		);
// 	}
// }

// export default withStyles(style)(PersonalInfo);
