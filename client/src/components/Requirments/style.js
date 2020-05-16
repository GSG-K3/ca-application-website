import { makeStyles, Theme, createStyles } from '@material-ui/core';

const styles = createStyles((theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		marginTop: 150,
	},
	root: {
		width: 287,
		height: 232,
	},
	box: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));
export default styles;
