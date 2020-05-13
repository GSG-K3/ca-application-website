import React, { Fragment, Component, isValidElement } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	useHistory,
} from 'react-router-dom';
import Home from './screens/Home';
import NotFoundPage from './screens/NotFoundPage';
import Login from './screens/Login';
import Contact from './screens/Contact';
import Profile from './screens/Profile';
import PersonalInfo from './screens/PersonalInfo';
import SignUp from './screens/SignUp';
import Accounts from './screens/Accounts';
import Cookies from 'js-cookie';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const PrivateComponent = ({ Component, ...props }) => {
	const isLoggedIn = localStorage.getItem('isLoggedIn');

	return (
		<Route
			exact={true}
			{...props}
			render={(innerProps) => {
				return isLoggedIn ? (
					<Component {...innerProps} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				);
			}}
		/>
	);
};

const checkAuth = async () => {
	console.log('entered');
	let isLoggedIn = false;

	await axios('/api/check-auth')
		.then((res) => {
			localStorage.setItem('isLoggedIn', 'true');
			isLoggedIn = true;
		})
		.catch((err) => {
			localStorage.removeItem('isLoggedIn');
			console.log(err);
		});
};

const App = () => {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<PrivateComponent path="/user/:userId" exact component={Profile} />
					<PrivateComponent path="/contact-us" exact component={Contact} />
					<Route path="/signUp" exact component={SignUp} />
					<PrivateComponent
						path="/user/:userId/accounts"
						exact
						component={Accounts}
					/>
					<PrivateComponent
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
};

export default App;
