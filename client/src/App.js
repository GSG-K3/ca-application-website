import React, { Fragment, Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './Screens/Home';
import SupportTeam from './components/SupportTeam';
import NotFoundPage from './Screens/NotFoundPage';
import Login from './Screens/Login';
import Contact from './Screens/Contact';
import Profile from './Screens/Profile';
import PersonalInfo from './Screens/PersonalInfo';
import SignUp from './Screens/signUp';
import Accounts from './Screens/Accounts';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route
						path="/login"
						exact
						render={() => (
							<Login onChange={(fields) => this.onChange(fields)} />
						)}
					/>
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
