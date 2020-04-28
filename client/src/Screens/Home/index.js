import React, { Fragment, Component } from 'react';
import NavBar from '../../Components/NavBar';
import axios from 'axios';

class Home extends Component {
	state = {};
	componentDidMount() {
		axios
			.get('/api/personal-data')
			.then((data) => console.log('frontend', data))
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<Fragment>
				<NavBar />
				<h1>Hello this is a home screen</h1>
			</Fragment>
		);
	}
}

export default Home;
