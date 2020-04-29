import { createStyles } from '@material-ui/core';
const styles = createStyles((theme) => ({
	pageContent: {
		spacing: 4,
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		
		backgroundColor: 'F2F2F2',
		margin: 50, 
	},
	aboutContainer:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	aboutHeader: {
		textAlign: 'center',
		fontSize: '20px',
		fontFamily: 'Lobster Two',
		color: '#4CB7A7',
		margin:'20px'
	},
	aboutCard: {
		display:' flex',
		flexDirection: 'column',
		alignitems: 'center',
		width: '300px',
		textAlign: 'left',
		padding: '50px',
		borderRadius: '40px',
		margin: '30px',
		marginLeft: '50px',
		backgroundColor: '#F2F2F2',
		fontFamily: 'robtoContent',
		height: '200px',
		fontSize: '10px',
	},

	aboutp1: {
		color: '#000000',
		textAlign: 'left',
	},
	buttonAbout: {
		margin: 'auto',
		backgroundColor: ' #4CB7A7',
		width: '95px',
		color: '#fff',
		padding: ' 6px',
		borderRadius: '10px',
		fontFamily: 'Roboto Condensed',
		fontSize: '10px',
	},
}));
export default styles;
