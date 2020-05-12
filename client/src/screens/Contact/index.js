import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import Cards from '../../components/Cards';

class Contact extends Component {
	state = {};

	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.text} id="contact">
					<Cards />
				</div>
			</Fragment>
		);
	}
}
export default withStyles(styles)(Contact);
