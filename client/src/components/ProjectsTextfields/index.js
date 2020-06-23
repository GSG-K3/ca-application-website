import React, { Fragment, Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import style from './style';
import axios from 'axios';

class Textfields extends Component {
	state = {
		firstProject: '',
		secondProject: '',
		userId: this.props.userId,
		Submitted: false,
	};
	componentDidMount = () => {
		if (JSON.parse(localStorage.getItem('submittedProjects'))) {
			this.setState({ Submitted: true });
		} else {
			this.setState({ Submitted: false });
		}
	};
	handleClick = (event) => {
		event.preventDefault();
		axios
			.post(`/api/user/${this.state.userId}/projects`, {
				firstProject: this.state.firstProject,
				secondProject: this.state.secondProject,
				userId: this.state.userId,
			})
			.then(({ data }) => {
				if (data) {
					this.setState({ Submitted: true });
					return localStorage.setItem(
						'submittedProjects',
						JSON.stringify(this.state.Submitted),
					);
				}
			})
			.catch((err) => this.props.history.push('/404'));
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
						disabled={this.state.Submitted ? true : false}
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
						disabled={this.state.Submitted ? true : false}
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
