import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	grid: {
		height: '100px',
	},
	image: {
		width: '230px',
		height: '129px',
		// marginLeft: '8.75rem',
		// [theme.breakpoints.up('lg')]: {
		// 	// marginLeft: '2.5rem',
		// },
		// [theme.breakpoints.up('xl')]: {
		// 	// marginLeft: '3.75rem',
		// },
	},
	typography: {
		display: 'flex',
		direction: 'row',
		justify: 'center',
		fontStyle: 'normal',
		color: '#3F6989',
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

// colors: {
//   darkBlue: '#3F6989',
//   skyBlue: '#4CB7A7',
//   darkOrange: '#FB6C04',
//   titleColor: '#235378',
//   lightGray: '#899FAA',
//   white: '#FFFFFF',
// },
