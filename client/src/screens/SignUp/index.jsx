import React, { Component } from 'react';
import SignUpForm from '../../components/SignUp';
class SignUp extends Component {
	render() {
		return (
			<div>
				<SignUpForm props={this.props} />
			</div>
		);
	}
}

export default SignUp;