import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

import Home from './Screens/Home';
import NotFoundPage from './Screens/NotFoundPage';

import './App.css';
import About from "./screens/Home/index";

function App() {


	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
    <div className="App">
     <About/>
	</div>;
			</Router>
		</Fragment>
	);

}

export default App;
