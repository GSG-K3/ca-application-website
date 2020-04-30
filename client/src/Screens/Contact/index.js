import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

class Contact extends Component {
	state = {};

	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.text} id="contact">
					<h1>This is Contact section</h1>
				</div>
			</Fragment>
		);
	}
}
export default withStyles(styles)(Contact);
