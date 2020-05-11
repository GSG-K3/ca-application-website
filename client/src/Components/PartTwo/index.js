import React, { Fragment, Component } from 'react';
import style from './style';
import { withStyles } from '@material-ui/styles';
import {
	Select,
	InputLabel,
	RadioGroup,
	Radio,
	FormControlLabel,
	FormLabel,
} from '@material-ui/core';

class PartTwo extends Component {
	state = {
		gender: '',
		age: '',
		WestBankCity: '',
		GazaCity: '',
	};
	handleChange = (event) => {
		let { name, value } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<div className={classes.container}>
					<div className={classes.firstSection}>
						<div>
							<InputLabel htmlFor="age-native-simple">
								What is your gender?
							</InputLabel>
							<Select
								native
								value={this.state.gender}
								onChange={this.handleChange}
								inputProps={{
									name: 'gender',
								}}
								className={classes.genderSelect}
							>
								<option aria-label="None" value="Select" />
								<option value="Female">Female</option>
								<option value="Male">Male</option>
							</Select>
						</div>
						<div className={classes.age}>
							<FormLabel component="legend">What age range are you?</FormLabel>
							<RadioGroup
								aria-label="age"
								name="age"
								onChange={this.handleChange}
							>
								<FormControlLabel value="<18" control={<Radio />} label="<18" />
								<FormControlLabel
									value="18-20"
									control={<Radio />}
									label="18-20"
								/>
								<FormControlLabel
									value="21-25"
									control={<Radio />}
									label="21-25"
								/>
								<FormControlLabel
									value="26-30"
									control={<Radio />}
									label="26-30"
								/>
								<FormControlLabel
									value="31-35"
									control={<Radio />}
									label="31-35"
								/>
								<FormControlLabel
									value="36-40"
									control={<Radio />}
									label="36-40"
								/>
								<FormControlLabel value="+40" control={<Radio />} label="+40" />
							</RadioGroup>
						</div>
					</div>
					<div className={classes.secondSection}>
						<div>
							<InputLabel htmlFor="age-native-simple">
								Where do you live in West Bank?
							</InputLabel>
							<Select
								value={this.state.WestBankCity}
								onChange={this.handleChange}
								inputProps={{
									name: 'WestBankCity',
								}}
								className={classes.citySelect}
							>
								<option aria-label="None" value="None" />
								<option value="Khalil">Khalil</option>
								<option value="Villages South of Khalil">
									Villages South of Khalil
								</option>
								<option value="Villages North of Khalil">
									Villages North of Khalil
								</option>
								<option value="Bethlehem">Bethlehem</option>
								<option value="Villages near Bethlehem">
									Villages near Bethlehem
								</option>
								<option value="Another big city in WestBank">
									Another big city in WestBank
								</option>
								<option value="East Jerusalem">East Jerusalem</option>
								<option value="Other">Other</option>
							</Select>
						</div>
						<div>
							<InputLabel htmlFor="age-native-simple">
								Where do you live in Gaza?
							</InputLabel>

							<Select
								value={this.state.GazaCity}
								onChange={this.handleChange}
								inputProps={{
									name: 'WestBankCity',
								}}
								className={classes.citySelect}
							>
								<option aria-label="None" value="None" />
								<option value="Gaza City">Gaza City</option>
								<option value="	North of Gaza Strip">North of Gaza Strip</option>
								<option value="Middle Area of Gaza">Middle Area of Gaza</option>
								<option value="Khan Younis">Khan Younis</option>
								<option value="Rafah">Rafah</option>
								<option value="Other">Other</option>
							</Select>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default withStyles(style)(PartTwo);
