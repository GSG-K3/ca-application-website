import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider } from '@material-ui/core/';
import theme from './theme';

ReactDOM.render(
<<<<<<< HEAD
	<MuiThemeProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</MuiThemeProvider>,
	document.getElementById('root'),
=======

  <MuiThemeProvider theme={theme}>
  <React.StrictMode >
    <App />
  </React.StrictMode>
  </MuiThemeProvider>,
  document.getElementById('root')

>>>>>>> 8d8f948584dc0764ebc35e222410ef28787afe0e
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
