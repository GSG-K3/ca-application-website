import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './style';
import About from '../../components/About';
class Home extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<h1>Hello this is a home screen</h1>
				<About />
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
