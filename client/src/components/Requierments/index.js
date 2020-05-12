import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';

class Requirements extends Component {
	state = {};

	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.text} id="steps">
					<h1>This is Requirements section</h1>
				</div>
			</Fragment>
		);
	}
}
export default withStyles(styles)(Requirements);
