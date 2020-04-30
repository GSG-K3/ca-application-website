import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

class SupportTeam extends Component {
	state = {};

	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.text} id="mentors">
					<h1>This is mentors section</h1>
				</div>
			</Fragment>
		);
	}
}
export default withStyles(styles)(SupportTeam);
