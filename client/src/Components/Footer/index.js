import React, { Fragment, Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import style from './style';
import ShareDialog from '../../Components/ShareDialog';
import { withStyles } from '@material-ui/core/styles';

class Footer extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Fragment>
				<Grid container direction="row" spacing={1} className={classes.grid}>
					<Grid item wrap xs={12}>
						<Typography paragraph variant="h5" className={classes.firstText}>
							Thinking of Development?
						</Typography>
						<Typography variant="h4" className={classes.thirdText}>
							Do you know someone who’d love this program?
						</Typography>
					</Grid>
					<Grid item wrap xs={12}>
						<ShareDialog />
					</Grid>
				</Grid>
				<Grid
					container
					direction="row"
					justify="center"
					alignitems="center"
					md={12}
					className={classes.smallGrid}
				>
					<Typography className={classes.secondText}>
						© 2020 All rights reserved. GSG
					</Typography>
				</Grid>
			</Fragment>
		);
	}
}

export default withStyles(style, { withTheme: true })(Footer);
