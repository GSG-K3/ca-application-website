import React, { Fragment, Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import style from './style';
import axios from 'axios';

class Textfields extends Component {
	state = {
		firstProject: '',
		secondProject: '',
		Submitted: false,
	};
	handleClick = (event) => {
		// axios
		// 	.post('/api/user/:userId/projects', {
		// 		github: this.state.github,
		// 		freecodecamp: this.state.freecodecamp,
		// 		codewars: this.state.codewars,
		// 	})
		// 	.then((data) => {
		// 		if (data.data) return this.setState({ Submitted: true });
		// 	})
		// 	.catch();
		event.preventDefault();
	};
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.container}>
					<TextField
						id="1"
						name="firstProject"
						onChange={this.handleChange}
						label="First Project"
						style={{ margin: 8, width: '70% ' }}
						placeholder="https://github.com/yourrepoName"
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
						variant="outlined"
					/>
					<TextField
						name="secondProject"
						id="2"
						label="freecodecamp account"
						style={{ margin: 8, width: '70% ' }}
						placeholder="https://github.com/yourrepoName"
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
						variant="outlined"
						onChange={this.handleChange}
					/>
					<Button
						variant="contained"
						color="secondary"
						className={classes.btn}
						onClick={(event) => this.handleClick(event)}
						disabled={this.state.Submitted ? true : false}
					>
						{this.state.Submitted ? 'Submitted' : 'Upload'}
					</Button>
				</div>
			</Fragment>
		);
	}
}

export default withStyles(style)(Textfields);
