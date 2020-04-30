import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	list: {
		width: 250,
		[theme.breakpoints.between('1094', 'xl')]: {
			display: 'none !important',
		},
	},
	link: {
		color: '#3F6989',
		paddingTop: 2,
		textDecoration: 'unset',
		'&:active': {
			color: '#2c495f',
			background: 'none',
		},
		'&:hover': {
			color: '#3F6989',
			textDecoration: 'underline',
		},
		'&:visited': {
			color: '#3F6989',
			background: 'none',
		},
		'&:link': {
			color: '#3F6989',
		},
	},
}));

export default useStyles;
