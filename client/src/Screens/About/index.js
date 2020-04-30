import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

class About extends Component {
	state = {};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.text} id="about">
				<h1>This is about section</h1>
			</div>
		);
	}
}
export default withStyles(styles)(About);
