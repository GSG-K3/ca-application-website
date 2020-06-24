import React, { Component, Fragment } from 'react';
import NavBar from '../../components/NavBar';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import style from './style';
import Tabs from '../../components/Tabs';

class PersonalProfile extends Component {
	state = {
		value: 0,
	};

	handleChange = (event, newValue) => {
		this.setState({ value: newValue });
	};

	handleChangeIndex = (index) => {
		this.setState({ value: index });
	};
	componentDidMount() {}
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<NavBar matchPath={this.props.match} history={this.props.history} />
				<Grid
					container
					direction="column"
					justify="flex-start"
					alignItems="center"
					className={classes.container}
					spacing={2}
				>
					<Grid item>
						<Avatar
							alt="Cindy Baker"
							src={require('../../assets/girl.png')}
							className={classes.avatarPic}
						/>
					</Grid>
					<Grid item>
						<Typography>Nicole Kidman</Typography>
					</Grid>
					<Grid item>
						<Tabs handleChange={this.handleChange} value={this.state.value} />
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default withStyles(style)(PersonalProfile);
