import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import CollapsibleAccounts from '../../components/CollapsibleAccounts';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import style from './style';
import { animateScroll as scroll, Events } from 'react-scroll';
import Content from '../../Content/projects';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { IconButton } from '@material-ui/core';

class Profile extends Component {
	state = {
		data: [],
	};
	componentDidMount() {
		Events.scrollEvent.register('begin', function () {
			console.log('begin', arguments);
		});

		Events.scrollEvent.register('end', function () {
			console.log('end', arguments);
		});

		return this.setState({ data: Content() });
	}
	updateState = () => {
		return this.setState({ data: Content() });
	};
	scrollToTop = () => {
		scroll.scrollToTop();
	};

	handleClickOpen = (id) => (event) => {
		event.preventDefault();
	};

	render() {
		const { classes } = this.props;
		const location = this.props.match.path;

		return (
			<Grid>
				<NavBar matchPath={this.props.match} history={this.props.history} />
				<Grid className={classes.pageContent}>
					<Grid className={classes.collapseContainer}>
						{this.state.data.map((data, index) => {
							return (
								<CollapsibleAccounts
									key={index}
									header={data.header}
									body={data.body}
									id={data.id}
									onClick={this.handleClickOpen}
									location={location}
									userId={this.props.match.params.userId}
									history={this.props.history}
								/>
							);
						})}
					</Grid>
					<Grid className={classes.bottom}>
						<img
							src={require('../../assets/tree.png')}
							alt="tree pic"
							className={classes.treeImage}
						/>
						<IconButton
							color="secondary"
							aria-label="up"
							className={classes.iconBtn}
							onClick={this.scrollToTop}
						>
							<ExpandLessIcon className={classes.upBtn} />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(style)(Profile);
