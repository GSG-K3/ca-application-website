import React, { Component, Fragment } from 'react';
import style from './style';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

class About extends Component {
	state = {};
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.aboutContainer} id="about">
					<Card className={classes.aboutCard}>
						<h1 className={classes.aboutHeader}>CodeAcademy Program</h1>
						<p className={classes.aboutp1}>
							This program is for anyone truly serious about putting in the
							time, effort, and determination to become a junior web developer
							ready to work in a tech company. A university degree or prior
							technical experience is not required.
						</p>
						<p className={classes.aboutp1}>
							The goal of the Code Academy is to accelerate the growth of
							globally competitive coding talent in Palestine. We believe that
							by helping Palestinian youth build high-tech and modern skills to
							participate in the exponentially growing tech sector, they will
							have a sustainable and long-term pathway to high-quality
							employment.
						</p>
						<Button variant="contained" className={classes.buttonAbout}>
							Join us
						</Button>
					</Card>
				</div>
			</Fragment>
		);
	}
}

export default withStyles(style)(About);
