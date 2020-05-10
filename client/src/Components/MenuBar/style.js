import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	btnMenu: {
		[theme.breakpoints.between('0', '1094')]: {
			display: 'display !important',
		},

		[theme.breakpoints.between('1095', 'xl')]: {
			display: 'none !important',
		},
	},
	root: {
		fontSize: '2.5rem',
	},
}));

export default useStyles;
