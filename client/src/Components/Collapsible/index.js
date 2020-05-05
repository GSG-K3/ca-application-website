import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import useStyles from './style';
import { Button, createStyles } from '@material-ui/core';
import Linkify from 'react-linkify';

export default function Profile(props) {
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	const classes = useStyles();

	return (
		<Fragment>
			<MuiExpansionPanel
				square
				expanded={expanded === `panel${props.id}`}
				onChange={handleChange(`panel${props.id}`)}
				classes={{
					root: classes.ExpansionPanelroot,
					expanded: classes.ExpansionPanelexpanded,
				}}
			>
				<MuiExpansionPanelSummary
					aria-controls={`panel${props.id}bh-content`}
					id={`panel${props.id}bh-header`}
					classes={{
						root: classes.ExpansionPanelSummaryroot,
						expanded: classes.ExpansionPanelSummaryexpanded,
						content: classes.ExpansionPanelSummarycontent,
					}}
				>
					{expanded === `panel${props.id}` ? (
						<IndeterminateCheckBoxIcon className={classes.plusIcon} />
					) : (
						<AddBoxIcon className={classes.plusIcon} />
					)}
					<Typography className={classes.headerText}>{props.header}</Typography>
				</MuiExpansionPanelSummary>
				<div className={classes.bodyBox}>
					<MuiExpansionPanelDetails
						style={{ height: props.id === 2 ? 1081 : 241 }}
						classes={{ root: classes.ExpansionPanelDetailsroot }}
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
					</MuiExpansionPanelDetails>
				</div>
			</MuiExpansionPanel>
		</Fragment>
	);
}
