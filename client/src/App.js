import React, { Fragment, Component, useState, useEffect } from 'react';
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


const PrivateComponent = ({ component: Component, ...props }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
		<Route
			exact={true}{...props}
			render={(innerProps) => {
        return isLoggedIn
        ? (<Component {...innerProps} />)
        : (<Redirect to={{ pathname: '/login', state: { from: props.location } }}	/>);
			}}
		/>
	);
};
function App() {

  const [isLoggedIn, setIsLoggedIn]= useState(localStorage.getItem('isLoggedIn'))
  useEffect(async()=>{
    try{
      const res= await axios('/api/user/checkAuth')
      console.log('res', res)
      console.log('isLogged', isLoggedIn)
      if(isLoggedIn)
      setIsLoggedIn(localStorage.getItem('res.token'));
    }
    catch(error){ throw Error(error)}
   
  },[] )

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
