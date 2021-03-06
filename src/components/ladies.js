import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
//import {BrowserRouter as Router} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Grid3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://tse1.mm.bing.net/th?id=OIP.8sj27NW23T3eSqd2e1QbJQHaHa&pid=Api&P=0&w=300&h=300" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                 Ladies collection available
                </Typography>
                <Typography variant="body2" gutterBottom>
                Best with trousers
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030120
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Try must
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">$150.00</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
} 