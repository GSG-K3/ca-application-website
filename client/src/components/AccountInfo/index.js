import React, { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';

class AccountInfo extends Component {
	state = {};
	render() {
		const { info } = this.props;
		return (
			<Fragment>
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="flex-start"
				>
					<Grid item>Github link :{info.github_link}</Grid>
					<Grid item>FreeCodeCamp link:{info.freecodecamp_link}</Grid>
					<Grid item>Codewars link :{info.codewars_link}</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default AccountInfo;
