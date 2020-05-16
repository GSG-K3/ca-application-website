import React, { Fragment, Component } from 'react';
import error from '../../assets/errorPage.svg';
import { withStyles } from '@material-ui/styles';
import style from './style';
class NotFoundPage extends Component {
	state = {};
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.body}>
				<div>
					<img
						src={require('../../assets/logo-GsG.svg')}
						alt="logo"
						className={classes.logo}
					/>
				</div>
				<div>
					<img src={error} alt="error page" className={classes.img} />
				</div>
			</div>
		);
	}
}

export default withStyles(style)(NotFoundPage);
