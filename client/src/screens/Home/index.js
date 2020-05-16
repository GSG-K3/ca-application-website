import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Requierments from '../../Components/Requirments';
import About from '../../Components/About';
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
		const { classes } = this.props;
		console.log('home props', this.props);
		return (
			<Fragment>
				<h2>this is home page</h2>
				<div
					id="home"
					// className={classes.body}
				>
					<NavBar matchPath={this.props.match} />
					<About />
					<Requierments />
					<SupportTeam data={this.state.data} />
					<Footer />
				</div>
			</Fragment>
		);
	}
}

export default Home;
