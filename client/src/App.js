import React, { Fragment, Component } from 'react';
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
import FormLogin from './Screens/login/index';

class App extends Component {
	state = {
		fields: {},
	};

	onChange = (updatedValue) => {
		this.setState({
			fields: {
				...this.state.fields,
				...updatedValue,
			},
		});
	};
	render() {
		return (
			<Fragment>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route component={NotFoundPage} />
						<Redirect to="/404" />
					</Switch>
					<div className="App">
						<FormLogin  onChange={(fields) => this.onChange(fields)} />
						
					</div>
				</Router>
			</Fragment>
		);
	}
}

export default App;
