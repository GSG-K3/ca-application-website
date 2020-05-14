import React, { Fragment, Component } from 'react';
import axios from 'axios';
import Requierments from '../../components/Requierments';
import NavBar from '../../components/NavBar';
import SupportTeam from '../../components/SupportTeam';
import Footer from '../../components/Footer';
import Stories from '../../components/Stories';
import { withStyles } from '@material-ui/core';
import styles from './style';
import { css } from '@emotion/core';
import About from '../../components/About';
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
			{isLoading  ? 
					<div style={{position:"relative"}}>
						
						<div className={classes.loader}>
							<BounceLoader
								// css={override}
								className={classes.loader}
								size={150}
								color={'#4CB7A7'}
								height={100}
								width={100}
								isLoading={isLoading}
							/>
						</div>
					</div>
				:
			<Fragment id="home" className={classes.body}>
				

				<NavBar matchPath={this.props.match} />
				<About />
				<Requierments />
				<Stories />
				<SupportTeam data={this.state.data} />
				<Footer />
			</Fragment>
			}
			</>
		);
	}
}

export default withStyles(styles)(Home);
