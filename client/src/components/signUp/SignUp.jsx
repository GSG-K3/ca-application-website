import React, { Fragment, Component } from "react";
import FlipMove from "react-flip-move";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  FormControlLabel,
  Paper,
  Checkbox,
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

class SignUp extends Component {
  state = initialState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  validate = () => {
    const { email, password, passwordConfirm } = this.state;

    let emailError =
      !email.includes("@") ||
      !email.includes("gmail.com", "hotmail.com", ".net", ".ps")
        ? "Invalid email address"
        : "";

    let passwordError =
      password.length < 8 ? "minimum 9 charchters Required" : "";
    new RegExp();
    if (!password.includes("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$")) {
      console.log(password.includes("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"));
      passwordError = "Failed to meet the required pattern[A-Z][a-z][0-9]";
    }

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
      console.log(this.state);
      axios
        .post("/api/signUp", {
          user: { email, password, passwordConfirm },
        })
        .then((res) => {
          if (res.data.message.includes("Email is already exists")) {
            const emailError = res.data.message.toString();
            this.setState({ emailError });
            return false;
          }
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
                      helperText={passwordError}
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
                    <Link href="#" variant="body2">
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
