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
