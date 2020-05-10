import React, { Fragment } from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import useStyles from './style';
import { Button } from '@material-ui/core';
import Linkify from 'react-linkify';
import Cards from '../Cards';
import TextFields from '../Textfields';

export default function CollapsibleAccounts(props) {
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const classes = useStyles();

	const { location } = props;

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
						style={{ height: props.id === 1 ? 375 : 241 }}
						classes={{ root: classes.ExpansionPanelDetailsroot }}
					>
						<Typography
							className={props.id === 2 ? classes.bodyText2 : classes.bodyText}
						>
							{props.id === 1 ? <Cards location={location} /> : null}
							{props.id === 2 ? <TextFields /> : null}
							{props.body}
						</Typography>
					</MuiExpansionPanelDetails>
				</div>
			</MuiExpansionPanel>
		</Fragment>
	);
}
