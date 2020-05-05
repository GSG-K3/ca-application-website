import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Screens/Home';
import Req from './components/requirments/index'
import NotFoundPage from './Screens/NotFoundPage';

import './App.css';

function App() {
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/home" exact component={Home} />
				</Switch>
			</Router>
		</Fragment>
	);
}

export default App;
