import React, { Fragment, Component } from 'react';
import axios from 'axios';
import TemporaryDrawer from '../../Components/TemporaryDrawer';
import Requierments from '../../Components/Requierments';
import Contact from '../Contact';
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
					<SupportTeam />
					<Contact />
					<Footer /> */}
				</div>
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
