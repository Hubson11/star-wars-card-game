import React from 'react';
import { createBrowserHistory } from 'history';
import {
  makeStyles,
  Card,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import { LandingPage } from './routes/LandingPage';
import GameSettings from './routes/GameSettings';
import PlayContent from './routes/PlayContent';

export const history = createBrowserHistory();

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: 'darkblue',
    padding: '50px 0',
    minWidth: 400,
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  header: {
    textAlign: 'center',
  },
  descriptionLabel: {
    fontSize: 16,
    color: 'silver',
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  title: {
    fontSize: 20,
    color: theme.palette.color.white,
    fontWeight: 700,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  centerContent: {
    justifyContent: 'center',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Card className={classes.container} >
        <CardHeader
          className={classes.header}
          title={
            <Typography className={classes.title}>
              Star Wars Card Game
            </Typography>
          }
          subheader={
            <Typography className={classes.descriptionLabel}>
              Try to be Jedi
            </Typography>
          }
        />
        <Grid className={classes.centerContent}>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/game">
              <GameSettings />
            </Route>
            <Route path="/play">
              <PlayContent />
            </Route>
          </Switch>
        </Router>
      </Grid>
    </Card>
  );
}

export default App;
