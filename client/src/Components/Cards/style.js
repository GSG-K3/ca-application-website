const Styles = (theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16),
		},
	},
	paper: {
		width: 271,
		height: 331,
		backgroundColor: 'whitesmoke',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 151,
		height: 149,
	},
	card: {
		display: 'none ! important',
	},
	divider: {
		height: 1,
		width: 216,
	},
});

export default Styles;
