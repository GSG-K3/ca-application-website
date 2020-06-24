import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

function ScoresInfo(props) {
	const { info, loading } = props;
	return (
		<Fragment>
			<Grid
				container
				direction="column"
				justify="center"
				alignItems="flex-start"
			>
				{loading ? (
					'Please wait its loading...'
				) : (
					<Fragment>
						<Grid item>Scores :{info.freecodecamp_scores}</Grid>
						<Grid item>CodeWars Level:{info.codewars_level}</Grid>
					</Fragment>
				)}
			</Grid>
		</Fragment>
	);
}

export default ScoresInfo;
