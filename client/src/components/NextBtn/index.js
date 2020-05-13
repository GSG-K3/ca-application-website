import { Button } from '@material-ui/core';
import useStyles from './style';
import React, { Fragment } from 'react';

function getSteps() {
	return [
		'Personal Information',
		'Education & skills',
		'Experience & Further Info',
	];
}

export default function NextBtn(props) {
	const classes = useStyles();
	const steps = getSteps();

	return (
		<Fragment>
			{props.activeStep === steps.length ? (
				<div>
					<Button onClick={props.handleReset}>Reset</Button>
				</div>
			) : (
				<div className={classes.btns}>
					<div className={classes.back}>
						<Button
							disabled={props.activeStep === 0}
							onClick={props.handleBack}
							className={classes.backButton}
						>
							Back
						</Button>
					</div>
					<div className={classes.next}>
						<Button
							variant="contained"
							color="primary"
							onClick={props.handleNext}
						>
							{props.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
						</Button>
					</div>
				</div>
			)}
		</Fragment>
	);
}
