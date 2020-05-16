import React, { Fragment, Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './Screens/Home';
import NotFoundPage from './Screens/NotFoundPage';
import Login from './Screens/Login';
import Contact from './Screens/Contact';
import ContactUs from './Screens/ContactUs/';
import Profile from './Screens/Profile';
import PersonalInfo from './Screens/PersonalInfo';
import SignUp from './Screens/SignUp';
import Accounts from './Screens/Accounts';
import Welcome from './Screens/Welcome';
import { BeatLoader } from 'react-spinners';
import { red } from '@material-ui/core/colors';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/user/:userId" exact component={Profile} />
					<Route path="/contact-us" exact component={ContactUs} />
					<Route path="/register" exact component={SignUp} />
					<Route path="/welcome" exact component={Welcome} />
					<Route path="/user/:userId/accounts" exact component={Accounts} />
					<Route
						path="/user/:userId/personal-info"
						exact
						component={PersonalInfo}
					/>
					<Route component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
