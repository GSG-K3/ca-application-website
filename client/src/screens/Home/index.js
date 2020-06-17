import React, { Fragment, Component } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import About from '../../components/About';
import Requierments from '../../components/Requirments';
import SuccessStories from '../../components/SuccessStories';
import SupportTeam from '../../components/SupportTeam';
import Footer from '../../components/Footer';
import { withStyles } from '@material-ui/core';
import styles from './style';
import { css } from '@emotion/core';
// import * as Spinners from 'react-spinners';
import { BounceLoader } from 'react-spinners';

const override = css`
	display: block;
	margin: 0 auto;
	border-color: red;
`;
class Home extends Component {
	state = {
		data: [],
		isLoading: true,
	};
	componentDidMount() {
		axios
			.get('/api/support-team')
			.then((result) => {
				const { data } = result;
				this.setState({ isLoading: false, data });
			})

			.catch((err) => {
				this.setState({ isLoading: false });
				console.log(err);
			});
	}

	render() {
		const { classes } = this.props;
		const { isLoading } = this.state;
		return (
			<>
				{isLoading ? (
					<div style={{ position: 'relative' }}>
						<div className={classes.loader}>
							<BounceLoader
								// css={override}
								className={classes.loader}
								size={170}
								color={' #4CB7A7'}
								isLoading={isLoading}
							/>
						</div>
					</div>
				) : (
					<Fragment id="home" className={classes.body}>
						<NavBar matchPath={this.props.match} />
						<About />
						<Requierments />
						<SuccessStories />
						<SupportTeam data={this.state.data} />
						<Footer />
					</Fragment>
				)}
			</>
		);
	}
}

export default withStyles(styles)(Home);
