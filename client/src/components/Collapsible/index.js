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

export default function Collapsible(props) {
	const [expanded, setExpanded] = React.useState('panel1');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};
	const classes = useStyles();

	const { location } = props;
	console.log(location);

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
								<Cards location={location} />
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
