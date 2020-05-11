import React, { Fragment, Component } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Paper,
} from "@material-ui/core";
import Styles from "./styles";
import logo from "../../assets/logo-GsG.svg";
import { withStyles } from "@material-ui/core";
import axios from "axios";

const initialState = {
  email: "",
  password: "",
  passwordConfirm: "",
  emailError: "",
  passwordError: "",
  passwordConfirmedError: "",
};

let regex = /^[A-Za-z]\w{7,}$/;
class SignUp extends Component {
  state = initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validate = () => {
    const { email, password, passwordConfirm } = this.state;

    let emailError = !email.includes("@") ? "Invalid email address" : "";

    let passwordError = !password.match(regex)
      ? "minimum 8 charcters, one Capital letter, one small letter,one number at least"
      : "";

    let passwordConfirmedError =
      password !== passwordConfirm ? "Passwords do not match" : "";

    if (passwordConfirmedError || emailError || passwordError) {
      this.setState({ emailError, passwordError, passwordConfirmedError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, passwordConfirm } = this.state;
    const isValid = this.validate();
    if (isValid) {
      axios
        .post("/api/signUp", {
          user: { email, password, passwordConfirm },
        })
        .then((res) => {
          if (res.data.message.includes("exists")) {
            const emailError = res.data.message.toString();
            this.setState({ emailError });
            return false;
          } 
          else if (res.data.message.includes("pattern")) {
            const passwordError = res.data.message.toString();
            this.setState({ passwordError });
            return false;
          }
          else this.props.props.history.push("/home");
        })
        .catch((err) => console.log(err));
      this.setState(initialState);
    }
  };

  render() {
    const { classes } = this.props;
    const {
      email,
      password,
      passwordConfirm,
      emailError,
      passwordError,
      passwordConfirmedError,
    } = this.state;

    const Copyright = () => {
      return (
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://gazaskygeeks.com/">
            GSG Community
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      );
    };
    return (
      <Fragment>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <img src={logo} alt="logo GsG" />
              <Typography component="h1" variant="h5">
                Create Account
              </Typography>

              <form
                className={classes.form}
                method="post"
                onSubmit={this.handleSubmit}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.TextField}
                      name="email"
                      value={email}
                      variant="outlined"
                      marign="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      onChange={this.handleChange}
                      error={emailError}
                      helperText={emailError}
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.TextField}
                      name="password"
                      value={password}
                      variant="outlined"
                      marign="normal"
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      type="password"
                      onChange={this.handleChange}
                      helperText={
                        passwordError
                          ? passwordError
                          : "minimum 8 charcters, one Capital letter, one small letter,one number at least"
                      }
                      error={passwordError}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      className={classes.TextField}
                      name="passwordConfirm"
                      value={passwordConfirm}
                      variant="outlined"
                      marign="normal"
                      required
                      fullWidth
                      id="Re_password"
                      label="Confirm Password"
                      type="password"
                      onChange={this.handleChange}
                      helperText={passwordConfirmedError}
                      error={passwordConfirmedError}
                      autoFocus
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item xs>
                    <Link href={"/home"} variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(Styles)(SignUp);
