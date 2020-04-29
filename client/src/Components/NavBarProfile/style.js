import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	grid: {
		height: '100px',
	},
	menuGrid: {
		[theme.breakpoints.between('0', '1035')]: {
			display: 'none !important;',
		},
	},
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
		[theme.breakpoints.down('sm')]: {
			fontSize: '2.8rem',
			paddingLeft: '1.75rem',
		},
		'&:active': {
			fontSize: '1.8rem',
			color: '#2c495f',
			background: 'none',
		},
		'&:hover': {
			color: '#3F6989',
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
	iconNotification: {
		color: '#3F3D56',
		padding: 'unset',
		marginLeft: 35,
		marginRight: 35,
		marginTop: 8,
	},
	iconProfile: {
		color: '#3F3D56',
	},
	large: { width: theme.spacing(7), height: theme.spacing(7) },
	text: {
		paddingTop: 4,
	},
}));

export default useStyles;
