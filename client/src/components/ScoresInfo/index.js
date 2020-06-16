import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

function ScoresInfo(props) {
	const { info } = props;
	return (
		<Fragment>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="flex-start"
			>
				<Grid item>Scores :{info.freecodecamp_scores}</Grid>
				<Grid item>CodeWars Level:{info.codewars_level}</Grid>
			</Grid>
		</Fragment>
	);
}

export default ScoresInfo;
