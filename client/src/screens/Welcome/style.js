const styles = {
	container: {
		width: 1140,
		height: 477,
		background: '#F7F6F4',
		boxShadow: '12px 17px 4px rgba(202, 192, 192, 0.25)',
		borderRadius: 56,
	},
	welcomP1: {
		fontFamily: ' Roboto',
		fontStyle: ' normal',
		fontWeight: ' bold',
		fontSize: '25px',
		lineHeight: '30px',
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
    },
    welcomP2: {
        lineHeight: '15px',
        fontFamily: ' Roboto',
		fontStyle: ' normal',
		fontWeight: ' bold',
		fontSize: '15px',
    },

	body: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginTop: 67,
	},
	polygon: {
		position: 'absolute',
		top: '-84.83px',
		left: 780.27,
		width: 485,
		height: 478,
		zIndex: '-1',
	},
	loginGrid: {
		width: 470,
		height: 472,
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	btn: {
        color: 'white',
        fontFamily: ' Roboto',
		backgroundColor: '#4CB7A7',
		borderRadius: 61,
		width: 272,
		height: 45,
		fontSize: 20,
		marginTop: 20,
	},
};

export default styles;
