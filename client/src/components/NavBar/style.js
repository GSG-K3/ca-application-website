import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	hideMenu: {
		display: 'none !important;',
	},
	Container: {
		height: 155,
		display: 'flex',
	},

	logoGrid: {
		justifyContent: 'center',
	},
	logo: {
		width: 280,
		height: 170,
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
	menu: {
		[theme.breakpoints.between('0', '1095')]: {
			display: 'none !important;',
		},
	},
	menuBtn: {
		[theme.breakpoints.down('1095')]: {
			position: 'relative',
			left: 529,
		},
	},
	profileGrid: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		[theme.breakpoints.between('0', '1095')]: {
			display: 'none !important;',
		},
	},
	notiBtn: {
		left: 11,
		bottom: '-6px',
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
