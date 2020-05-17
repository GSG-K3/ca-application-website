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
import ContactUs from './screens/ContactUs/';
import Profile from './screens/Profile';
import PersonalInfo from './screens/PersonalInfo';
import SignUp from './screens/SignUp';
import Accounts from './screens/Accounts';
import Welcome from './screens/Welcome';
import { BeatLoader } from 'react-spinners';
import { red } from '@material-ui/core/colors';
import axios from 'axios';
// import Cookies from 'js-cookies';

const PrivateComponent = ({ component: Component, ...props }) => {
	const isLoggedIn = localStorage.getItem('isLoggedIn');

	return (
		<Route
			exact={true}
			{...props}
			render={(innerProps) => {
				return isLoggedIn ? (
					<Component {...innerProps} />
				) : (
					<Redirect
						to={{ pathname: '/login', state: { from: props.location } }}
					/>
				);
			}}
		/>
	);
};

class App extends React.Component {
	componentDidMount() {
		const isLoggedIn = localStorage.getItem('isLoggedIn');
		if (isLoggedIn) {
			const token = localStorage.getItem('token');
			axios
				.post('/check-authentication', { token })
				.then((res) => {
					console.log('auth', res);
				})
				.catch((err) => console.log(err));
		}
	}
	render() {
		return (
			<Fragment>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/login" exact component={Login} />
						<PrivateComponent path="/user/:userId" exact component={Profile} />
						<PrivateComponent path="/contact-us" exact component={ContactUs} />
						<Route path="/register" exact component={SignUp} />
						<Route path="/welcome" exact component={Welcome} />
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
	}
}

export default App;
