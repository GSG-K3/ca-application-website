import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	btnMenu: {
		[theme.breakpoints.between('0', '1034')]: {
			display: 'display !important',
		},

		[theme.breakpoints.between('1035', 'xl')]: {
			display: 'none !important',
		},

		position: 'fixed !important;',
		right: 40,
		top: 48,
	},
	root: {
		fontSize: '2.5rem',
	},
}));

export default useStyles;
