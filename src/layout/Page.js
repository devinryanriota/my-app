import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './styles.css';
import Header from '../components/header/Header';
import MainTitle from '../components/mainTitle/MainTitle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  defaultGridItem: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    border: 0
  },
  header: {
    border: 0,
    position: 'absolute', /* Sit on top of the page content */
    // display: none; /* Hidden by default */
    width: '100%', /* Full width (cover the whole page) */
    height: '100%', /* Full height (cover the whole page) */
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2 /* Specify a stack order in case you're using a different order for other elements */
  },
  imageSlider: {
    border: 0,
    margin: 0,
    padding: 0,
    width: '100%', /* Full width (cover the whole page) */
    height: '100%', /* Full height (cover the whole page) */
    backgroundColor: 'rgba(0,0,0,0.5)', /* Black background with opacity */
  }
}));

function Page() {
  const classes = useStyles();
  return (
    <div className="Page">
      {/* <div className={styles.backgroundClip}>
      </div> */}
      <div className={classes.root}> 
      <Grid container spacing={3}>
        {/* header, consider use sticky effect */}
        <Grid item xs={12} style={{margin: 0, padding: 0, position: 'relative'}}>
          <div className={classes.header}><Header/></div>
        </Grid>
        {/* main title */}
        <Grid item xs={12} style={{margin: 0, padding: 0}}>
          <div className={classes.imageSlider}><MainTitle/></div>
        </Grid>
        {/* component 1 */}
        <Grid item xs={12} sm={6}>
          <Button>Click me</Button>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        {/* component 2 */}
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        {/*  */}
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        {/* main title */}
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        {/* main title */}
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        {/* main title */}
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default Page;
