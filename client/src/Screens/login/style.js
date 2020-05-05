import { createStyles } from '@material-ui/core';
const styles = createStyles((theme) => ({
	root: {
		height: '50vh',
	},
	image: {
		backgroundImage: 'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(20, 8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '50%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	root: {
		height: '100vh',
	},
	textErorr: {
		margin: 'auto',
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '8px',
	},
}));
export default styles;
