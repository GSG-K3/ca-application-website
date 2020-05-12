import React, { Fragment, Component } from 'react';
import error from '../../assets/error1.svg'
class NotFoundPage extends Component {
	state = {};
	render() {
		return <Fragment><img src={error}/></Fragment>;
	}
}

export default NotFoundPage;
