import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Paper,
	withStyles,
	Typography,
	Avatar,
	Grid,
	Box,
} from '@material-ui/core';
import Slider from 'react-slick';
import Typed from 'react-typed';
import avatar from '../../assets/success story Image.svg';
import quote from '../../assets/quote-left.svg';
import error from '../../assets/error1.svg';
import axios from 'axios';

const styles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		marginLeft: theme.spacing(45),
		marginBottom: '1rem',
		alignItems: 'center',
	},
	avatarPrm: {
		width: theme.spacing(15),
		height: theme.spacing(15),
		marginLeft: theme.spacing(45),
		marginBottom: '1rem',
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

const settings = {
	dots: true,
	fade: true,
	infinite: true,
	speed: 2000,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 1000,
};

export default function SupportTeam() {
	let [Story, storyFn] = useState([]);

	useEffect(() => {
		axios
			.get('/api/success-stories')
			.then((response) => {
				console.log(response);
				storyFn(response.data);
			})
			.catch((error) => console.log(error));
	}, []);

	const classes = styles();

	const storyArray = Story.map((item, index) => {
		console.log('items: ', item.name);
		console.log(item.id);
		return (
			<div key={item.id}>
				<img src={item.picture} />
				<h3>{item.name}</h3>
			</div>
		);
	});
	console.log(storyArray);

	return Story ? (
		<Fragment>
			{Story.length && storyArray}

			<Slider {...settings}>
				{Story.length && storyArray}

{/* 
				<Paper elevation="24" style={{ borderRadius: '80px' }}>
					<Typography className={classes.title} variant="h4">
						<Typed
							strings={['Success Stories']}
							typeSpeed={50}
							backSpeed={50}
						/>
					</Typography>

					<Grid container spacing={2} className={classes.grid}>
						<Grid item xs={2}>
							<Avatar
								className={classes.avatarSec}
								src={Story.picture}
								alt="success Story"
							/>
						</Grid>
						<Grid item md={1} sm={6}>
							<Avatar
								className={classes.avatarPrm}
								src={Story.picture}
								alt="success Story"
							/>
						</Grid>
						<Grid item md={2}>
							<Avatar
								className={classes.avatarSec}
								src={Story.picture}
								alt="success Story"
							/>
						</Grid>
					</Grid>

					<Typography className={classes.name}>
						{Story.job_title}

						<br />
						{Story.name}
					</Typography>

					<Typography className={classes.para}>{Story.description}</Typography>
					<img src={quote} className={classes.name} />
				</Paper>
				<Paper elevation="24" style={{ borderRadius: '80px' }}>
					<Typography className={classes.title} variant="h4">
						<Typed
							strings={['Success Stories']}
							typeSpeed={50}
							backSpeed={50}
						/>
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
								src={Story.picture}
								alt="success Story"
							/>
						</Grid>
						<Grid item md={2}>
							<Avatar
								className={classes.avatarSec}
								src={Story.picture}
								alt="success Story"
							/>
						</Grid>
					</Grid>

					<Typography className={classes.name}>
						{Story.job_title}

						<br />
						{Story.name}
					</Typography>

					<Typography className={classes.para}>{Story.description}</Typography>
					<img src={quote} className={classes.name} />
				</Paper> */}
			</Slider>
		</Fragment>
	) : (
		<div>
			{' '}
			Sorry !! an Error occurred ... <br />
			<img src={error} />{' '}
		</div>
	);
}
