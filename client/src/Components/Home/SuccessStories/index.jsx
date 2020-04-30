import React, { Component, Fragment, useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import style from './style';
import {
	Paper,
	withStyles,
	Typography,
	Avatar,
	Grid,
	Box,
} from '@material-ui/core';
import Typed from 'react-typed';
import ReactPaginate from 'react-paginate';
import avatar from '../../../assets/success story Image.svg';
import quote from '../../../assets/quote-left.svg';
import error from '../../../assets/error.svg'
import axios from 'axios';

const styles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		marginLeft: theme.spacing(45),
		marginBottom: '1rem',
		alignItems: 'center',

		// padding: theme.spacing(14)
	},
	avatarPrm: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		marginLeft: theme.spacing(45),
		marginBottom: '1rem',
		// alignItems: "center"
	},
	avatarSec: {
		width: theme.spacing(9),
		height: theme.spacing(9),
		marginLeft: theme.spacing(55),
		marginBottom: '1rem',
		alignItems: 'center',
	},
	title: {
		color: '#235378',
		// marginLeft: '35rem',
		marginTop: '3rem',
		marginBottom: '2rem',
		textAlign: 'center',
	},
	para: {
		color: 'black',
		marginBottom: '2rem',
		marginLeft: theme.spacing(45),
		marginRight: theme.spacing(40),
	},
	name: {
		color: '#235378',
		marginLeft: theme.spacing(70),
		marginBottom: '1rem',
	},
	grid: {
		alignItems: 'center',
	},
}));

export default function SupportTeam() {
	let [Name, namefn] = useState([]);


	useEffect(() => {
		axios.get('/api/home/success-stories')
			.then((response) => {
				console.log('HoooorYY');
				console.log(response.data);
				namefn(response.data[0]);
				})
			.catch((error) => console.log(error));
	}, []);

	const classes = styles();

	return Name ? (
		<Fragment>
			<Paper elevation="24" style={{ borderRadius: '80px' }}>
				<Typography className={classes.title} variant="h4">
					<Typed strings={['Success Stories']} typeSpeed={50} backSpeed={50} />
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
							src={(Name.picture)}
						
							alt="success Story"
						/>
					</Grid>
					<Grid item md={2}>
						<Avatar
							className={classes.avatarSec}
							src={Name.picture}
							alt="success Story"
						/>
					</Grid>
				</Grid>

				<Typography className={classes.name}>
				{(Name.job_title)}
					
					<br />
					{(Name.name)}
				</Typography>

				<Typography className={classes.para}>
					{(Name.description)}
				</Typography>
				<img src={quote} className={classes.name} />
			</Paper>
			{/* <div>{(Name.picture)} </div> */}
		</Fragment>
	):(
		<div> Sorry !! an Error occurred  ... <br/>
		<img src={error}/> </div>
	)
	}

