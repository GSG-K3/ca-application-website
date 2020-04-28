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
});

export default theme;
