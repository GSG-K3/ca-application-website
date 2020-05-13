import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { Button, Grid, Typography, Link } from '@material-ui/core';
import axios from 'axios';
class ContactUs extends Component {
	handleClick = (e) => {
		e.preventDefault();
	};
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.body} id="login">
					<img
						src={require('../../assets/Polygon.png')}
						alt="polygon image"
						className={classes.polygon}
					/>
					<Grid
						wrap
						className={classes.container}
						container
						direction="row"
						justify="center"
						alignItems="center"
						spacing={3}
					>
						<Grid
							item
							wrap
							container
							justify="center"
							alignItems="center"
							xl={6}
							className={classes.loginGrid}
						>
							<Grid item>
								<img
									src={require('../../assets/logo-GsG.svg')}
									alt="GSG logo"
								/>
							</Grid>
							<Grid item>
								<Typography
									color="primary"
									variant="h6"
									className={classes.welcomP1}
								>
									Contact Us
								</Typography>
							</Grid>
							<Grid item>
								<Typography
									color="primary"
									variant="h6"
									className={classes.welcomP2}
								>
									Feel free to contact us anytime we will get back to you as
									soon as we can!
								</Typography>
							</Grid>

							<Grid item>
								<Button
									type="submit"
									onClick={this.handleClick}
									variant="contained"
									color="primary"
									className={classes.btn}
								>
									Submit
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</div>
			</Fragment>
		);
	}
}

export default withStyles(styles)(ContactUs);
