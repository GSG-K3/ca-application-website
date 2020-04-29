import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import Home from './Screens/Home';
import SupportTeam from './Screens/SupportTeam';
import NotFoundPage from './Screens/NotFoundPage';

import './App.css';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/home" exact component={Home} />
					<Route path="/home/support-team" exact component={SupportTeam} />
					<Route component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
