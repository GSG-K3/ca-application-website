import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	grid: {
		height: '100px',
	},
	menuGrid: {
		[theme.breakpoints.between('0', '1095')]: {
			display: 'none !important;',
		},
	},
	image: {
		width: '230px',
		height: '129px',
		[theme.breakpoints.down('1045')]: {
			marginLeft: '30px',
		},
	},
	imageGrid: {
		[theme.breakpoints.down('md')]: {
			alignContent: 'center',
		},
	},
	typography: {
		display: 'flex',
		justifyContent: 'center',
		fontStyle: 'normal',
		color: '#3F6989',
		[theme.breakpoints.between('0', '1283')]: {
			justifyContent: 'unset',
		},
	},
	link: {
		fontSize: '1.625rem',
		paddingLeft: '2.75rem',
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
		[theme.breakpoints.up('lg')]: {
			fontSize: '1.5rem',
		},
		[theme.breakpoints.up('xl')]: {
			fontSize: '1.65rem',
		},
	},
	notiBtn: {
		bottom: '7px',
		left: '10px',
	},
	avatarPic: {
		marginRight: 15,
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
	text: {
		paddingTop: 4,
	},
}));

export default useStyles;
