import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import style from './style';
import { Paper,withStyles, Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import ReactPaginate from "react-paginate";
import avatar from "../../../assets/success story Image.svg";
import quote from "../../../assets/quote-left.svg";


const styles = makeStyles((theme) => ({
  "*": {
    // marginLeft: `10rem`
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginLeft: theme.spacing(45),
    marginBottom: "1rem",
    alignItems: "center"

    // padding: theme.spacing(14)
  },
  avatarPrm: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginLeft: theme.spacing(45),
    marginBottom: "1rem"
    // alignItems: "center"
  },
  avatarSec: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginLeft: theme.spacing(55),
    marginBottom: "1rem",
    alignItems: "center"
  },
  title: {
    color: "#235378",
    // marginLeft: '35rem',
    marginTop: "3rem",
    marginBottom: "2rem",
    textAlign: "center"
  },
  para: {
    color: "black",
    marginBottom: "2rem",
    marginLeft: theme.spacing(45),
		marginRight: theme.spacing(40),
		
  },
  name: {
    color: "#235378",
    marginLeft: theme.spacing(70),
    marginBottom: "1rem"
  },
  grid: {
    alignItems: "center"
  }
}));

export default function SupportTeam() {
  const classes = styles();

  return (
    <Fragment>
			<Paper elevation="24" style={{borderRadius:'80px'}} >
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Success Stories"]} typeSpeed={50} />
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={2}>
          <Avatar
            className={classes.avatarSec}
            src={avatar}
            alt="success Story"
          />
        </Grid>
        <Grid item md={1} sm={6}>
          <Avatar
            className={classes.avatarPrm}
            src={avatar}
            alt="success Story"
          />
        </Grid>
        <Grid item md={2}>
          <Avatar
            className={classes.avatarSec}
            src={avatar}
            alt="success Story"
          />
        </Grid>
      </Grid>

      <Typography className={classes.name}>
        GSG-Community Role
        <br />
        name
      </Typography>
			
      <Typography className={classes.para}>
        Team After reading about what had to be done, I decided to make a plan
        for how I should study in order to achieve my goal and finish the
        courses, because I didn't have time for studying at a leisurely pace. My
        objective was to learn quickly, but not so quickly as to destroy the
        desire, giving my brain some time to relax. Because the load that I
        wanted to tackle would be an obstacle for me.”XT
      </Typography>
      <img src={quote} className={classes.name} alignItems="center" />
			</Paper>
    </Fragment>
  );
}