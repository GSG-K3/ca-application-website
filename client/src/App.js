import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Screens/Home';
import NotFoundPage from './Screens/NotFoundPage';
import Login from './Screens/Login';
import Contact from './Screens/Contact';
import PersonalInfo from './Screens/PersonalInfo';
import Profile from './Screens/Profile';

import './App.css';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/home" exact component={Home} />
					<Route path="/contact-us" exact component={Contact} />
					<Route path="/user/:userId" exact component={Profile} />
					<Route
						path="/user/:userId/personal-info"
						exact
						component={PersonalInfo}
					/>
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
