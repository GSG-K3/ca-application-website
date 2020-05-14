import { fade } from '@material-ui/core/styles/colorManipulator';
const styles = (theme) => ({
	body: {
		boxSizing: 'content-box',
		width: '100%',
	},
	loader: {
		top: '50%',
		left: '50%',
		right: 0,
		bottom: 0,
		backgroundColor: fade('#F2F2F2', 0.8),
		zIndex: 9999,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		hight:'100em',
		
		
	},
});
export default styles;
