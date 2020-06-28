import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import wp2634222 from './wp2634222.jpg';
import EventIcon from '@material-ui/icons/Event';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';

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

function Channel() {
    const classes = useStyles();
  return (
    <div className="wrapper">
    <Header />
    <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} sm={12}>
                            <img src={wp2634222} alt="Nature" />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Paper className={classes.paper} id="left-image">
                                <h3>Fresh Wave of climate</h3>
                                <h3>strikes takes place</h3>
                                <h3>around the world</h3>
                                <Toolbar>
                                    <List component="nav" className={classes.root} aria-label="contacts">
                                        <ListItem button className="gardian">
                                            <ListItemIcon>
                                                <SmokingRoomsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="The Guardian" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemIcon>
                                                <EventIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Today" />
                                        </ListItem>
                                    </List>
                                    <ListItem button>
                                        <Button size="small" className="nature">
                                            Nature
                                        </Button>
                                    </ListItem>
                                </Toolbar>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
    <Footer />  
    </div>
  );
}

export default Channel;
