import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Requierments from '../../components/Requierments';
import NavBar from '../../components/NavBar';
import SupportTeam from '../../components/SupportTeam';
import Footer from '../../components/Footer';
import Stories from '../../components/Stories';
import { withStyles } from '@material-ui/core';
import styles from './style';
import About from '../../components/About';

class Home extends Component {
	state = {
		data: [],
	};
	componentDidMount() {
		axios
			.get('/api/support-team')
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
				<Stories />
				<SupportTeam data={this.state.data} />
				<Footer />
			</Fragment>
		);
	}
}

export default withStyles(styles)(Home);
