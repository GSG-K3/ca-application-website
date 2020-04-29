import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	grid: {
		height: '100px',
	},
	menuGrind: {
		[theme.breakpoints.between('0', '1035')]: {
			display: 'none !important;',
		},
	},
	IconButtonGrid: {
		textAlign: 'end',
		alignSelf: 'center',
		padding: '0px 43px',
	},
	image: {
		width: '230px',
		height: '129px',
		[theme.breakpoints.down('1045')]: {
			marginLeft: '30px',
		},
	},
	typography: {
		display: 'flex',
		direction: 'row',
		fontStyle: 'normal',
		color: '#3F6989',
		justifyContent: 'center',
	},
	link: {
		fontSize: '1.625rem',
		paddingLeft: '2.75rem',
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
}));

export default useStyles;
