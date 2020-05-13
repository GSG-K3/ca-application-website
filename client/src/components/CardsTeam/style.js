const styles = (theme) => ({
	paper: {
		width: 271,
		height: 350,
		backgroundColor: 'whitesmoke',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	img: {
		width: 241,
		height: 222,
	},
	divider: {
		height: 1,
		width: 216,
	},
	discord: {
		width: 24,
		height: 24,
		padding: ' 0px 5px 0px  5px',
	},
	mentorDescription: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: '80%',
		height: '40px',
	},
});

export default styles;
