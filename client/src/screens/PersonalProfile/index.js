import React, { Component, Fragment } from 'react';
import NavBar from '../../components/NavBar';
import { Avatar, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import style from './style';
import Tabs from '../../components/Tabs';
import { ValueProvider } from './contextProvider';

class PersonalProfile extends Component {
	state = {
		value: 0,
		userId: this.props.match.params.userId,
	};

	handleChange = (event, newValue) => {
		this.setState({ value: newValue });
	};

	handleChangeIndex = (index) => {
		this.setState({ value: index });
	};

	render() {
		const { classes } = this.props;

		return (
			<Fragment>
				<ValueProvider
					value={{
						value: this.state.value,
						handleChange: this.handleChange,
						handleChangeIndex: this.handleChangeIndex,
					}}
				>
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
							<Tabs userId={this.state.userId} history={this.props.history} />
						</Grid>
					</Grid>
				</ValueProvider>
			</Fragment>
		);
	}
}

export default withStyles(style)(PersonalProfile);
