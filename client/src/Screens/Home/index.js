import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './style';
import About from '../../components/about';
class Home extends Component {
	state = {};
	
	render() {
		const { classes } = this.props;
			console.log(classes);
		return (
			<Fragment classes={{ root: classes.pageContent }}>
				{/* <h1>Hello this is a home screen</h1>
				<About /> */}
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);