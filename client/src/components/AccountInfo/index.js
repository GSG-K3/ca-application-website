import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

function AccountInfo(props) {
	const { info } = props;
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

export default AccountInfo;
