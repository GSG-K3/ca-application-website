const style = (theme) => ({
	pageContent: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '30px 20px',
	},
	collapseContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: '30px',
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
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingRight: 32,
		paddingTop: 71,
		height: 464,
	},
});

export default style;
