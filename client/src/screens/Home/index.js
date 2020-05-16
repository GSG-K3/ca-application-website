import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Requierments from '../../Components/Requirments';
import NavBar from '../../Components/NavBar';
import SupportTeam from '../../Components/SupportTeam';
import Footer from '../../Components/Footer';
import SuccessStories from '../../Components/SuccessStories';
import { withStyles } from '@material-ui/core';
import styles from './style';
import { css } from '@emotion/core';
import About from '../../Components/About';
import * as Spinners from 'react-spinners';
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
			.get('/home/support-team')
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
