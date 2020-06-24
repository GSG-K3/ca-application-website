import React, { Fragment, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './style.js';
import axios from 'axios';

function SubmitPage(props) {
	const classes = useStyles();

	useEffect(() => {
		const userId = props.match.params.userId;
		axios
			.get('/api/user/:userId')
			.then((res) => props.history.push(`/user/${userId}/congratulation`))
			.catch((error) => props.history.push('/login'));
	}, []);
	return (
		<Fragment>
			<Grid
				container
				justify="center"
				direction="column"
				className={classes.container}
			>
				<NavBar matchPath={props.match} history={props.history} />
				<Grid
					container
					align="center"
					direction="column"
					className={classes.box}
					spacing={4}
				>
					<Grid item>
						<Typography variant="h4">WELL DONE Nicole!</Typography>
						<br></br>
						<Typography variant="h5">
							You have successfully filled your application,
							<br />
							We will send you an email for the test and interview appointments
							in the next upcoming days.
						</Typography>
					</Grid>
					<Grid item>
						<img
							src={require('../../assets/congrat.png')}
							alt="congtaduation"
							className={classes.image}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Fragment>
	);
}

export default SubmitPage;
