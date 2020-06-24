import { createStyles } from '@material-ui/core';
const styles = createStyles((theme) => ({
	aboutImage: {
		width: 500,
	},
	gridContainer: {
		paddingTop: 40,
	},
	card: {
		width: 1057,
		height: 442,
		borderRadius: '40px',
		backgroundColor: '#F2F2F2',
	},
	header: {
		paddingTop: 22,
	},
	bodyText: {
		paddingTop: 20,
	},
	btn: {
		marginTop: 12,
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
	link: {
		textDecoration: 'unset',
		color: 'white',
		textTransform: 'capitalize',
		'&:active': {
			color: 'white',
		},
	},
}));
export default styles;
