import React, { Fragment, Component } from 'react';
import NavBarProfile from '../../Components/NavBarProfile';
import NavBar from '../../Components/NavBar';
import TemporaryDrawer from '../../Components/TemporaryDrawer';

class Home extends Component {
	state = {};
	render() {
		return (
			<Fragment>
				<NavBarProfile />
				{/* <NavBar /> */}
			</Fragment>
		);
	}
}

export default Home;
