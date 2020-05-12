import { createStyles } from '@material-ui/core';

const StyledMenuItem = createStyles((theme) => ({
	root: {
		'&:focus': {
			backgroundColor: 'gray',
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: 'white',
			},
		},
	},
}));

export default StyledMenuItem;
