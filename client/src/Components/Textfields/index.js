import React, { Fragment, Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import style from './style';
import axios from 'axios';

class Textfields extends Component {
	state = {
		Gethub: '',
		freecodecamp: '',
		codewars: '',
		Submitted1: false,
		Submitted2: false,
		Submitted3: false,
	};
	handleClick = (event, index) => {
		console.log('clicked', index, event);
		axios
			.post('/api/user/:userId/accounts', this.state)
			.then((data) => {
				if (data.data) {
					console.log(data);
					this.setState({
						Submitted1: true,
						Submitted2: true,
						Submitted3: true,
					});
				} else
					this.setState({
						Submitted1: true,
						Submitted2: false,
						Submitted3: false,
					});
			})
			.catch();
		event.preventDefault();
	};
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		const { classes } = this.props;
		console.log(this.state);
		return (
			<Fragment>
				<TextField
					id="1"
					name="Gethub"
					onChange={this.handleChange}
					label="Gethub account"
					style={{ margin: 8, width: '70% ' }}
					placeholder="Please insert your gethub account's link"
					margin="normal"
					InputLabelProps={{
						shrink: true,
					}}
					variant="outlined"
				/>
				<Button
					variant="contained"
					color="secondary"
					className={classes.btn}
					onClick={(event) => this.handleClick(event, 1)}
					disabled={this.state.Submitted1 ? true : false}
				>
					{this.state.Submitted1 ? 'Submitted' : 'Upload'}
				</Button>
				<TextField
					name="freecodecamp"
					id="2"
					label="freecodecamp account"
					style={{ margin: 8, width: '70% ' }}
					placeholder="Please insert your codewars account's link"
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
					onClick={(event) => {
						this.props.onClick(event, 2);
					}}
					disabled={this.state.Submitted2 ? true : false}
				>
					{this.state.Submitted2 ? 'Submitted' : 'Upload'}
				</Button>
				<TextField
					name="codewars"
					id="3"
					label="codewars account"
					style={{ margin: 8, width: '70% ' }}
					placeholder="Please insert your freecodecamp account's link"
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
					onClick={(event) => {
						this.props.onClick(event, 3);
					}}
					disabled={this.state.Submitted3 ? true : false}
				>
					{this.state.Submitted3 ? 'Submitted' : 'Upload'}
				</Button>
			</Fragment>
		);
	}
}

export default withStyles(style)(Textfields);
