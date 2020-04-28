import { makeStyles } from '@material-ui/core/styles';

// const theme = createMuiTheme ()
// const styles = makeStyles((theme) => ({
// 	avatar: {
// 		width: theme.spacing(7),
// 		height: theme.spacing(7),
// 		marign: theme.spacing(2),
// 	},
// }));

const styles = makeStyles((theme) => ({
  '*':{
    // marginLeft: `10rem`
  },
    avatar: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      marginLeft: theme.spacing(30),
      // padding: theme.spacing(14)
    },
    title: {
      color: '#235378',
      marginLeft:'35rem'
  
    },
    para: {
      color: 'black',
      marginBottom: '3rem',
    },
    name:{
  color:'#235378'
  
    }
  }));
export default styles;
