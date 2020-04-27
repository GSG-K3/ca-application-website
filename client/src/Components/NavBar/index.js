import React, { Fragment, Component } from 'react';
import axios from 'axios';

class NavBar extends Component {
	state = {};
	componentDidMount() {
		axios.get('/').then((data) => console.log('frontend', data));
	}
	render() {
		return <Fragment>Hello this is a nave NavBar Compnent</Fragment>;
	}
}

export default NavBar;
