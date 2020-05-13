import React, { Fragment, Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './screens/Home';
import NotFoundPage from './screens/NotFoundPage';
import Login from './screens/Login';
import Contact from './screens/Contact';
import Profile from './screens/Profile';
import PersonalInfo from './screens/PersonalInfo';
import SignUp from './screens/SignUp';
import Accounts from './screens/Accounts';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/user/:userId" exact component={Profile} />
					<Route path="/contact-us" exact component={Contact} />
					<Route path="/signUp" exact component={SignUp} />
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
