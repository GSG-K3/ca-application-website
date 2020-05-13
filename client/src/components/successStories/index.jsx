import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Avatar, Grid } from "@material-ui/core";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Typed from "react-typed";
import error from "../../assets/error1.svg";
import axios from "axios";

const styles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginLeft: theme.spacing(45),
    marginBottom: "1rem",
    alignItems: "center",
  },
  avatarPrm: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginLeft: theme.spacing(45),
    marginBottom: "1rem",
  },
  avatarSec: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    marginLeft: theme.spacing(55),
    marginBottom: "1rem",
    alignItems: "center",
  },
  title: {
    color: "#235378",
    marginTop: "3rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  para: {
    color: "black",
    marginBottom: "2rem",
    marginLeft: theme.spacing(45),
    marginRight: theme.spacing(40),
  },
  name: {
    color: "#235378",
    marginLeft: theme.spacing(45),
    marginBottom: "1rem",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
		// alignItems: "space-around",
		
  },
}));

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 800,
  speed: 800,
};

export default function SupportTeam() {
  let [Story, storyFn] = useState([]);

  useEffect(() => {
    axios
      .get("/api/success-stories")
      .then((response) => {
        console.log(response);
        storyFn(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const classes = styles();

  return Story ? (
    <Fragment>
      <Paper elevation="24" style={{ borderRadius: "80px" }}>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Success Stories"]} typeSpeed={50} backSpeed={50} loop/>
        </Typography>
        <Slider {...settings}>
          {Story.length && (
            <Grid container spacing={2}>
              <Grid item md={1} sm={6} className={classes.grid}>
                <Avatar
                  className={classes.avatarPrm}
                  src={Story[0].picture}
                  alt="success Story"
                />
              </Grid>
              <Typography className={classes.name}>
                {Story[0].job_title}
                <br />
                {Story[0].name}
              </Typography>
              <Typography className={classes.para}>
                {Story[0].description}
              </Typography>

            </Grid>
          )}
          {Story.length && (
            <Grid container spacing={2} className={classes.grid}>
              <Grid item md={1} sm={6}>
                <Avatar
                  className={classes.avatarPrm}
                  src={Story[2].picture}
                  alt="success Story"
                />
              </Grid>
              <Typography className={classes.name}>
                {Story[2].job_title}
                <br />
                {Story[2].name}
              </Typography>

              <Typography className={classes.para}>
                {Story[2].description}
              </Typography>
            </Grid>
          )}
          {Story.length && (
            <Grid container spacing={2} className={classes.grid}>
              <Grid item md={1} sm={6}>
                <Avatar
                  className={classes.avatarPrm}
                  src={Story[1].picture}
                  alt="success Story"
                />
              </Grid>

              <Typography className={classes.name}>
                {Story[1].job_title}
                <br />
                {Story[1].name}
              </Typography>

              <Typography className={classes.para}>
                {Story[1].description}
              </Typography>
            </Grid>
          )}
        </Slider>
      </Paper>

      <Paper elevation="24" style={{ borderRadius: "80px" }}>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Success Stories"]} typeSpeed={50} backSpeed={50} />
        </Typography>

        {Story.length && (
          <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={2}>
              <Avatar
                className={classes.avatarSec}
                src={Story[1].picture}
                alt="success Story"
              />
            </Grid>
            <Grid item md={1} sm={6}>
              <Avatar
                className={classes.avatarPrm}
                src={Story[0].picture}
                alt="success Story"
              />
            </Grid>
            <Grid item md={2}>
              <Avatar
                className={classes.avatarSec}
                src={Story[2].picture}
                alt="success Story"
              />
            </Grid>
            <br />
            <Typography className={classes.name}>
              {Story[0].job_title}
              <br />
              {Story[0].name}
            </Typography>

            <Typography className={classes.para}>
              {" "}
              {Story[0].description}{" "}
            </Typography>
          </Grid>
        )}
      </Paper>
    </Fragment>
  ) : (
    <div>
      {" "}
      Sorry !! an Error occurred ... <br />
      <img src={error} />
    </div>
  );
}
