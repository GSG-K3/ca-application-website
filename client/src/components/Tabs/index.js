import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';
import styles from './style';
import AcoountsInfo from '../AccountInfo';
import ScoresInfo from '../ScoresInfo';
import axios from 'axios';
import { ValueConsmer } from '../../screens/PersonalProfile/contextProvider';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography component={'span'}>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`,
	};
}
class TabsComponent extends Component {
	state = {
		userId: 1,
		data: {},
	};
	componentDidMount() {
		axios
			.post('/api/user/:userId/profile', this.state)
			.then((data) => {
				this.setState({ data: data.data[0] });
			})
			.catch(err);
	}
	render() {
		const { classes } = this.props;

		return (
			<Fragment>
				<ValueConsmer>
					{(context) => {
						return (
							<Fragment>
								<AppBar
									position="static"
									color="default"
									className={classes.appbar}
								>
									<Tabs
										value={context.value}
										onChange={context.handleChange}
										indicatorColor="secondary"
										textColor="inherit"
										variant="fullWidth"
										aria-label="full width tabs example"
									>
										<Tab
											label="Accounts"
											{...a11yProps(0)}
											className={classes.btn1}
										/>
										<Tab
											label="Scores"
											{...a11yProps(1)}
											className={classes.btn2}
										/>
									</Tabs>
								</AppBar>
								<SwipeableViews
									index={context.value}
									onChangeIndex={context.handleChangeIndex}
								>
									<TabPanel children={'span'} value={context.value} index={0}>
										<AcoountsInfo info={this.state.data} />
									</TabPanel>
									<TabPanel children={'span'} value={context.value} index={1}>
										<ScoresInfo info={this.state.data} />
									</TabPanel>
								</SwipeableViews>
							</Fragment>
						);
					}}
				</ValueConsmer>
			</Fragment>
		);
	}
}

export default withStyles(styles)(TabsComponent);
