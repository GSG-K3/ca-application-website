import React, { Fragment, Component } from 'react';
import NavBar from '../../Components/NavBar';

class Home extends Component {
	state = {};
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
