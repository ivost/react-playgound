import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Page from 'material-ui-shell/lib/containers/Page'
import Clips from '../../components/Clips/Clips'
import ClipEvents from '../../components/Clips/ClipEvents'
/*
    Based on  https://www.react-most-wanted.com and https://material-ui.com
 */

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const HomePage = () => {
  const [selectedClip, setSelectedClip] = useState(null);
  const classes = useStyles();

  return (
      <Page>
          <Grid container spacing={3}>
              <Grid item xs={8}>
                  <Paper className={classes.paper}>
                      <Clips setSelectedClip={setSelectedClip}/>
                  </Paper>
              </Grid>
              <Grid item xs={4}>
                  <Paper className={classes.paper}>
                      <ClipEvents selectedClip={selectedClip}/>
                  </Paper>
              </Grid>
          </Grid>
      </Page>
  )
}

export default HomePage
