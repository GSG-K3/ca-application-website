import React, { Fragment } from 'react';
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
import ContactUs from './screens/ContactUs/';
import Profile from './screens/Profile';
import PersonalInfo from './screens/PersonalInfo';
import SignUp from './screens/SignUp';
import Accounts from './screens/Accounts';
import PersonalProfile from './screens/PersonalProfile';
import Projects from './screens/Projects';
import Welcome from './screens/Welcome';
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
					<Route
						path="/user/:userId/profile"
						exact
						component={PersonalProfile}
					/>
					<Route path="/user/:userId/projects" exact component={Projects} />
					<Route component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
