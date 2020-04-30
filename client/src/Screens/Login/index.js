import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

class Login extends Component {
	state = {};

	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.text} id="login">
					<h1>This is login section</h1>
				</div>
			</Fragment>
		);
	}
}
export default withStyles(styles)(Login);
