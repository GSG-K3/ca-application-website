import React, { Fragment, Component } from 'react';
import SupportTeam from '../SupportTeam';
import axios from 'axios';

class Home extends Component {
	state = {
		data: [],
	};
	componentDidMount() {
		axios
			.get('/home/support-team')
			.then((result) => {
				const { data } = result;
				this.setState({ data });
			})
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<Fragment>
				<SupportTeam />
			</Fragment>
		);
	}
}

export default Home;
