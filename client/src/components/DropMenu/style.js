// import { createStyles } from '@material-ui/core';

const StyledMenuItem = (theme) => ({
	root: {
		'&:focus': {
			backgroundColor: 'gray',
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: 'white',
			},
		},
	},
});

export default StyledMenuItem;
