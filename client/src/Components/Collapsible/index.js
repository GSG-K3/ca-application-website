import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import useStyles from './style';
import { Button } from '@material-ui/core';
import Linkify from 'react-linkify';

const ExpansionPanel = withStyles({
	root: {
		width: 1017,
		marginBottom: 60,
		border: '1px solid #4CB7A7',
		boxShadow: 'none',
		'&:not(:last-child)': {
			// borderBottom: 1,
		},
		'&:before': {
			display: 'none',
		},
		'&$expanded': {
			marginBottom: 60,
		},
	},
	expanded: {
		'&last-child': { marginBottom: 60 },
	},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
	root: {
		backgroundColor: '#4CB7A7',
		borderBottom: '1px solid rgba(0, 0, 0, .125)',
		marginBottom: -1,
		minHeight: 56,
		'&$expanded': {
			minHeight: 56,
		},
	},
	content: {
		'&$expanded': {
			margin: '12px 0',
		},
	},
	expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
	root: {
		height: 241,
		padding: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	panel2: {
		height: 241,
	},
}))(MuiExpansionPanelDetails);

export default function Profile(props) {
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	const classes = useStyles();

	return (
		<Fragment>
			<ExpansionPanel
				square
				expanded={expanded === `panel${props.id}`}
				onChange={handleChange(`panel${props.id}`)}
			>
				<ExpansionPanelSummary
					aria-controls={`panel${props.id}bh-content`}
					id={`panel${props.id}bh-header`}
				>
					{expanded === `panel${props.id}` ? (
						<IndeterminateCheckBoxIcon className={classes.plusIcon} />
					) : (
						<AddBoxIcon className={classes.plusIcon} />
					)}
					<Typography className={classes.headerText}>{props.header}</Typography>
				</ExpansionPanelSummary>
				<div className={classes.bodyBox}>
					<ExpansionPanelDetails
						style={{ height: props.id === 2 ? 1081 : 241 }}
					>
						<Linkify>
							<Typography className={classes.bodyText}>
								{props.body}
								<Button
									variant="contained"
									color="secondary"
									className={classes.btn}
									onClick={props.onClick(props.id)}
									style={{ display: props.id === 2 ? 'none' : 'unset' }}
								>
									Check Out
								</Button>
							</Typography>
						</Linkify>
					</ExpansionPanelDetails>
				</div>
			</ExpansionPanel>
		</Fragment>
	);
}
