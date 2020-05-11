import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Screens/Home';
import SignUp from './Screens/signUp'
import NotFoundPage from './Screens/NotFoundPage';


function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route exact path='/home' component={Home}/>
					<Route exact path="/signUp"  component={SignUp} />
					<Route component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
