import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './style';
import About from '../../components/about';
import Requirments from '../../components/requirments';
class Home extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<About />
				<Requirments />
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
