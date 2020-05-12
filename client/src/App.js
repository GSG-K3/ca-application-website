import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './Screens/Home';


import './App.css';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path= "/home" exact component={Home} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
