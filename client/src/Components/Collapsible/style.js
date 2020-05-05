import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	headerText: {
		fontSize: 40,
		color: theme.colors.white,
		marginLeft: 10,
	},
	plusIcon: {
		color: theme.colors.white,
		marginLeft: 22,
		fontSize: '3.5rem',
	},
	bodyBox: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	bodyText: {
		top: 127,
		left: 105,
		color: 'rgba(0, 0, 0, 0.79)',
		width: 896,
		height: 96,
		position: 'absolute',
		fontSize: 30,
		color: 'rgba(0, 0, 0, 0.79)',
		whiteSpace: 'pre-wrap',
	},
	btn: {
		color: 'white',
		backgroundColor: '#4CB7A7',
		borderRadius: 61,
		position: 'absolute',
		left: 261,
		top: 133,
		width: 272,
		height: 68,
		fontSize: 25,
		[theme.breakpoints.down('425')]: {
			width: 200,
			height: 60,
			fontSize: 20,
		},
		[theme.breakpoints.down('382')]: {
			width: 150,
			height: 50,
			fontSize: 15,
		},
	},
	bigContent: {
		height: 789,
	},
}));

export default useStyles;
