import React, { Fragment, Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';
import styles from './style';
import AcoountsInfo from '../AccountInfo';
import ScoresInfo from '../ScoresInfo';
import axios from 'axios';
import { ValueConsmer } from '../../screens/PersonalProfile/contextProvider';
import TabPanel from './TabPanel';
import a11yProps from './a11yProps';

class TabsComponent extends Component {
	state = {
		userId: this.props.userId,
		data: {},
		loading: false,
		errMessage: '',
	};
	componentDidMount() {
		this.setState({ loading: true });
		axios
			.get(`/api/user/${this.state.userId}/profile`)
			.then((data) => {
				this.setState({ data: data.data[0], loading: false });
			})
			.catch((err) =>
				this.setState({
					errMessage:
						'No such a data Please create accounts (freeCode camp, Codewars, Github) to display your information ',
					loading: false,
				}),
			);
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
										{this.state.errMessage ? (
											this.state.errMessage
										) : (
											<AcoountsInfo
												loading={this.state.loading}
												info={this.state.data}
											/>
										)}
									</TabPanel>
									<TabPanel children={'span'} value={context.value} index={1}>
										{this.state.errMessage ? (
											this.state.errMessage
										) : (
											<ScoresInfo
												loading={this.state.loading}
												info={this.state.data}
											/>
										)}
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
