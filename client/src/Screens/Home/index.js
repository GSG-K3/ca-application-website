import React, { Fragment, Component } from 'react';
import NavBar from '../../Components/NavBar';
import axios from 'axios';
import { withStyles } from '@material-ui/core';
import styles from './style';

class Home extends Component {
	state = {};
	componentDidMount() {
		axios
			.get('/api/personal-data')
			.then((data) => console.log('frontend', data))
			.catch((err) => console.log(err));
	}
	render() {
		const { classes } = this.props;

		return <Fragment></Fragment>;
	}
}

export default withStyles(styles)(Home);
