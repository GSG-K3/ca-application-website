import React, { Fragment, Component } from 'react';
import NavBar from '../../components/NavBar';
import { withStyles } from '@material-ui/styles';
import style from './style';
import Stepper from '../../components/Stepper';
import { Grid } from '@material-ui/core';
import InfoTextFeilds from '../../components/InfoTextFeilds';
import PartTwo from '../../components/PartTwo';
import NextBtn from '../../components/NextBtn';

class PersonalInfo extends Component {
	state = {
		activeStep: 0,
	};

	handleNext = () => {
		this.setState((prevState) => {
			return { activeStep: prevState.activeStep + 1 };
		});
	};

	handleBack = () => {
		this.setState((prevState) => {
			return { activeStep: prevState.activeStep - 1 };
		});
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
						<InfoTextFeilds />
					</Grid>
					<Grid wrap item container direction="row" justify="flex-end">
						<PartTwo />
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
