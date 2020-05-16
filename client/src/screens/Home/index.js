import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Requierments from '../../components/Requirments';
import NavBar from '../../components/NavBar';
import SupportTeam from '../../components/SupportTeam';
import Footer from '../../components/Footer';
import SuccessStories from '../../components/SuccessStories';
import { withStyles } from '@material-ui/core';
import styles from './style';
import About from '../../components/About';

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

		return (
			<Fragment id="home" className={classes.body}>
				<NavBar matchPath={this.props.match} />
				<About />
				<Requierments />
				<SuccessStories />
				<SupportTeam data={this.state.data} />
				<Footer />
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
