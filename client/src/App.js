import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './Screens/Home';
import SupportTeam from './Components/SupportTeam';
import NotFoundPage from './Screens/NotFoundPage';
import Login from './Screens/Login';
import Contact from './Screens/Contact';
import Profile from './Screens/Profile';
import PersonalInfo from './Screens/PersonalInfo';
import Signup from './Screens/Signup';

import './App.css';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/home" exact component={Home} />
					<Route path="/home/support-team" exact component={SupportTeam} />
					<Route path="/login" exact component={Login} />
					<Route path="/user/:userId" exact component={Profile} />
					<Route
						path="/user/:userId/personal-info"
						exact
						component={PersonalInfo}
					/>
					<Route path="/contact-us" exact component={Contact} />
					<Route path="/signup" exact component={Signup} />
					<Route component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
