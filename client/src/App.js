import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import Home from './Screens/Home';
import Req from './Components/requirments/index'
import NotFoundPage from './Screens/NotFoundPage';

import './App.css';

function App() {
	return (
		<Fragment>

			<Req />
		
		</Fragment>
	);
}

export default App;
