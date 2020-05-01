import { createStyles } from '@material-ui/core';
const style = (theme: Theme) =>
	createStyles({
		grid: {
			background: '#4CB7A7',
			height: 288,
			color: 'white',
			textAlign: 'center',
		},
		firstText: {
			paddingTop: 38,
			[theme.breakpoints.down('425')]: {
				paddingTop: 30,
				fontSize: 30,
			},
			[theme.breakpoints.down('382')]: {
				paddingTop: 10,
				fontSize: 15,
			},
		},
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
		smallGrid: { height: 88 },
		secondText: {
			fontSize: 14,
			color: '#899FAA',
			paddingTop: 35,
			[theme.breakpoints.down('382')]: {
				paddingTop: 10,
			},
		},
	});

export default style;
