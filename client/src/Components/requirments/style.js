import { makeStyles, Theme, createStyles } from '@material-ui/core';

const styles = createStyles((theme) => ({
  pageContent:{
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor : theme.palette.primary,
    margin : theme.spacing(2) 

  } , root: {
    marginTop: theme.spacing(5),
    width: '100%', // Fix IE 11 issue.
    height:'80%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap:'wrap',
    marginLeft : theme.spacing(30),
    color: '3F6989',
}, type: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap:'wrap',
    marginLeft : theme.spacing(30),

} , title: {
    color: "#000000",
    // marginLeft: '35rem',
    marginTop: "3rem",
    marginBottom: "2rem",
    textAlign: "center"
  }
 
}));
export default styles

