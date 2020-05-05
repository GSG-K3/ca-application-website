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
	aboutContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	aboutHeader: {
		textAlign: 'center',
		fontSize: '25px',
		fontFtyle: 'normal',
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		color: '#4CB7A7',
	},
	aboutCard: {
		display: ' flex',
		flexDirection: 'column',
		alignitems: 'center',
		width: '330px',
		textAlign: 'left',
		padding: '40px',
		borderRadius: '40px',
		margin: '30px',
		marginLeft: '50px',
		backgroundColor: '#F2F2F2',
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '20px',
		lineHeight: '15px',
		height: '220px',
		fontSize: '10px',
	},

	aboutp1: {
		color: '#000000',
		textAlign: 'left',
	},
	buttonAbout: {
		margin: 'auto',
		backgroundColor: ' #4CB7A7',
		width: '110px',
		color: '#fff',
		padding: ' 6px',
		borderRadius: '61px',
		fontFtyle: 'normal',
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: '10px',
		lineHeight: '10px',
	},
}));
export default styles;
