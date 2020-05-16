import { createStyles } from '@material-ui/core/styles';

const Styles = createStyles((theme) => ({
	paper: {
		margin: theme.spacing(15, 10),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage:
			'url(http://www.philanthropyage.org/sites/default/files/styles/930x440/public/field/image/gaza_sky_geeks_co-working_space._credit_gaza_sky_geeks_mercy_corps.jpg?itok=vAq9QGID)',
		backgroundRepeat: 'no-repeat',
		backgroundColor:
			theme.palette.type === 'light'
				? theme.palette.grey[50]
				: theme.palette.grey[900],
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	form: {
		width: '100%',
		margin: theme.spacing(6),
		color: '3F6989',
	},
	submit: {
		width: '100%',
		margin: theme.spacing(3, 0, 2),
		borderRadius: 10,
	},
	TextField: {
		fontSize: '10',
	},
}));

export default Styles;
