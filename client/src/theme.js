import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	overrides: {
		MuiIconButton: {
			root: {
				marginLeft: 10,
				paddingTop: 6,
				paddingLeft: 12,
			},
		},
		MuiAvatar: {
			root: {
				marginRight: 15,
			},
		},
	},
	palette: {
		primary: { main: '#3F6989' },
		secondary: { main: '#4CB7A7' },
	},
	colors: {
		darkOrange: '#FB6C04',
		titleColor: '#235378',
		lightGray: '#899FAA',
		white: '#FFFFFF',
	},
});

export default theme;
