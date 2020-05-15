/**
 * Base App Component
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { hot } from 'react-hot-loader';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import WorkHistory from './WorkHistory.js';
import BottomNav from './BottomNav.js';

const DESKTOP_CONTAINER_WIDTH = 350;
const MOBILE_CONTAINER_WIDTH = 325;

const useStyles = makeStyles((theme) => {
  const LAYOUT_BREAKPOINT = theme.breakpoints.up(DESKTOP_CONTAINER_WIDTH + theme.spacing(2) * 2);
  return ({
	paper: {
		width: MOBILE_CONTAINER_WIDTH,
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: theme.spacing(1),
		[LAYOUT_BREAKPOINT]: {
			width: DESKTOP_CONTAINER_WIDTH
		}
	},
	image: {
    maxWidth: MOBILE_CONTAINER_WIDTH,
    [LAYOUT_BREAKPOINT]: {
      maxWidth: DESKTOP_CONTAINER_WIDTH
    }
	}
})});

const App = () => {
	const classes = useStyles();

	return (
		<Paper className={classes.paper} elevation={4}>
			<Box display="flex" flexDirection="column" p={1} m={1} alignItems="center" justifyContent="center">
				<img src={'/images/justin.jpg'} className={classes.image} />{' '}
				<Box mt={2}>
					<Typography variant="h5"> {'Justin Chan'} </Typography>{' '}
					<Typography variant="subtitle2"> {'University of Maryland 2018'} </Typography>{' '}
					<Typography variant="caption"> {"Bachelor's Degree - Computer Science"} </Typography>{' '}
				</Box>{' '}
				<WorkHistory />
				<BottomNav />
			</Box>{' '}
		</Paper>
	);
};

export default hot(module)(App);
