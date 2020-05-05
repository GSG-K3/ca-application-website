import React, { Fragment, Component } from 'react';
import NavBarProfile from '../../Components/NavBarProfile';
import NavBar from '../../Components/NavBar';
import TemporaryDrawer from '../../Components/TemporaryDrawer';
import Requierments from '../../Components/Requierments';
import Contact from '../Contact';
import SupportTeam from '../../Components/SupportTeam';
import Footer from '../../Components/Footer';
import { withStyles } from '@material-ui/core';
import styles from './style';
class Home extends Component {
	state = {};

	render() {
		return (
			<Fragment>
				<div id="home">
					{/* <NavBarProfile /> */}
					{/* <NavBar /> */}
					{/* <About /> */}
					{/* <Requierments />
					<SupportTeam />
					<Contact />
					<Footer /> */}
				</div>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
