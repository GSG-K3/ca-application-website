import React, { Component } from 'react';
import SignUpForm from '../../Components/SignUp';
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
