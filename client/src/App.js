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
import About from './Screens/Home/index';

function App() {
<<<<<<< HEAD
=======


>>>>>>> 8d8f948584dc0764ebc35e222410ef28787afe0e
	return (
		<Fragment>
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route component={NotFoundPage} />
					<Redirect to="/404" />
				</Switch>
<<<<<<< HEAD
				<div className="App">
					<About />
				</div>
			</Router>
		</Fragment>
	);
=======
    <div className="App">
     <About/>
	</div>;
			</Router>
		</Fragment>
	);

>>>>>>> 8d8f948584dc0764ebc35e222410ef28787afe0e
}

export default App;
