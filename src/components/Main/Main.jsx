import React from 'react';
import{Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';


const Main = () => {
  const classes= useStyles();
  return (
  <Card className= {classes.root}>
    <CardHeader title= "Expense Tracker"/>
    <CardContent>
      <Typography align="center" variant="h5">Total Balance $22</Typography>
      <Typography variant= "subtitle1" style= {{lineHeight: '1.5em',marginRight: '20px'}}>
        {/* InfoCard*/}
        Try saying: Add income for $22 in category salary for Monday...
      </Typography>
      <Divider/>
      <Form/>
    </CardContent>
    <CardContent className= {classes.CardContent}>
      <Grid container spacing= {2}>
        <Grid item xs={12}>
          <List/>
        </Grid>
      </Grid>
    </CardContent>
  </Card>

  );

}

export default Main
