import React, { Fragment } from 'react';
import SuccessStories from './Components/Home/SuccessStories';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Home from './Screens/home';
function App() {
	return (
		<Fragment>
      <Router>
        <Switch>
          <Route path= "/api/home/success-stories" exact component={Home} />
        </Switch>
          {/* <SuccessStories/> */}
      </Router>
	</Fragment>
	);
}

export default App;
