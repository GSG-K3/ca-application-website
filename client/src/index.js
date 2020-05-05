import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</React.StrictMode>,
=======
import { MuiThemeProvider } from '@material-ui/core/';
import theme from './theme';

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</MuiThemeProvider>,
>>>>>>> karmel-backup
	document.getElementById('root'),
);

serviceWorker.unregister();
