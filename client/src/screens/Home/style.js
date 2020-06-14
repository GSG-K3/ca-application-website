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
		marginTop:'20%',
		bottom: 0,
		zIndex: 9999,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		hight:'100em',
		
		
	},
});
export default styles;
