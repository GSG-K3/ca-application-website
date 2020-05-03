import { createStyles } from '@material-ui/core/styles';
const Styles = createStyles((theme) => ({
  paper: {
    // marginTop: theme.spacing(8),
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  root: {
    height: '100vh',

  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    // marginTop: theme.spacing(8),
    width: '60%', // Fix IE 11 issue.
    margin: theme.spacing(3),
    color:'3C5F72'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius : (10),
  },
}));

export default Styles;