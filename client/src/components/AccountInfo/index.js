import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

function AccountInfo(props) {
	const { info, loading } = props;
	console.log(props);
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
						<Grid item>Github link :{info.github_link}</Grid>
						<Grid item>FreeCodeCamp link:{info.freecodecamp_link}</Grid>
						<Grid item>Codewars link :{info.codewars_link}</Grid>
					</Fragment>
				)}
			</Grid>
		</Fragment>
	);
}

export default AccountInfo;
