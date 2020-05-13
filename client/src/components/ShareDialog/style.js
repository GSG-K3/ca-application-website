import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	btn: {
		color: 'white',
		backgroundColor: '#4CB7A7',
		borderRadius: 61,
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
}));

export default useStyles;
