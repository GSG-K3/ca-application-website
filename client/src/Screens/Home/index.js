import React, { Fragment, Component } from 'react';
import axios from 'axios';
import TemporaryDrawer from '../../Components/TemporaryDrawer';
import Requierments from '../../Components/Requierments';
import Contact from '../Contact';
import About from '../../Components/About';
import NavBarProfile from '../../Components/NavBarProfile';
import NavBar from '../../Components/NavBar';
import SupportTeam from '../../Components/SupportTeam';
import Footer from '../../Components/Footer';
import { withStyles } from '@material-ui/core';
import styles from './style';
class Home extends Component {
	state = {
		data: [],
	};
	componentDidMount() {
		axios
			.get('/home/support-team')
			.then((result) => {
				const { data } = result;
				this.setState({ data });
			})
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<Fragment>
				<div id="home">
					{/* <Footer /> */}
					{/* <SupportTeam data={this.state.data} /> */}
					{/* <NavBarProfile /> */}
					{/* <NavBar /> */}
					{/* <About /> */}
					{/* <Requierments />
					<Contact />*/}
				</div>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
