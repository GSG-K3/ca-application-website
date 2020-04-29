import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './style';
import About from '../../components/about';
class Home extends Component {
	state = {};
	componentDidMount() {};
	render() {
		const { classes } = this.props;
		console.log(classes);
		return (
			<Fragment classes={{ root: classes.pageContent }}>
				<About />
			</Fragment>
		);
	}
}
export default withStyles(styles)(Home);
