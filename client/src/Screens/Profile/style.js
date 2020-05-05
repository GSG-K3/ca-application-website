const style = (theme) => ({
	welcome: {
		position: 'absolute',
		width: 1081,
		height: 52,
		left: 127,
		top: 239,
		fontFamily: 'EB Garamond',
		fontStyle: 'normal',
		fontWeight: 'bold',
		fontSize: 36,
		textAlign: 'center',
		[theme.breakpoints.between('1220', 'md')]: {
			fontSize: 33,
			left: 89,
		},
	},
	collapseContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 272,
		marginLeft: 55,
		[theme.breakpoints.down('sm')]: {
			marginLeft: 628,
		},
		// [theme.breakpoints.between('sm', 'md')]: {
		// 	marginLeft: 269,
		// },
		[theme.breakpoints.between('1220', 'md')]: {
			marginLeft: 41,
		},
	},
	treeImage: {
		width: 500,
		height: 500,
		zIndex: '-1',
	},
	iconBtn: {
		height: 123,
		alignSelf: 'flex-end',
	},
	upBtn: {
		fontSize: '6.1875rem',
	},
	bottom: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 32,
		paddingTop: 71,
	},
});

export default style;
