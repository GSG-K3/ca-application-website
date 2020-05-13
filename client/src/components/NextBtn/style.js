import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	next: {
		position: 'relative',
		left: 359,
		marginBottom: 30,
	},
	back: {
		position: 'relative',
		right: 359,
		marginBottom: 30,
	},
	btns: {
		display: 'flex',
	},
}));

export default useStyles;
