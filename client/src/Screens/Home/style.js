import { createStyles } from '@material-ui/core';

const styles = createStyles((theme) => ({
	pageContent: {
		margin: theme.spacing(5),
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.colors.backgroundColor,
	},
}));

export default styles;
