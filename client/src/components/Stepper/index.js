import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import useStyles from './style';

function getSteps() {
	return [
		'Personal Information',
		'Education & skills',
		'Experience & Further Info',
	];
}

export default function StepperComponent(props) {
	const classes = useStyles();
	const steps = getSteps();

	return (
		<div className={classes.root}>
			<Stepper activeStep={props.activeStep} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</div>
	);
}
