import React, { Fragment, Component } from 'react';
import NavBarProfile from '../../Components/NavBarProfile';
import NavBar from '../../Components/NavBar';
import TemporaryDrawer from '../../Components/TemporaryDrawer';
import Requierments from '../Requierments';
import Contact from '../Contact';
import SupportTeam from '../SupportTeam';
import Footer from '../Footer';
import Profile from '../Profile';
import { withStyles } from '@material-ui/core';
import styles from './style';

class Home extends Component {
	state = {};

	render() {
		console.log(this.props);
		return (
			<Fragment>
				<h1>Hello this is a home screen</h1>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
