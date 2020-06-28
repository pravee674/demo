import React from 'react';
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
import Nature from './nature.jpg';
import Pen from './pen.jpg';
import Phone from './phone.jpg';
import Leaf from './leaf.jpg';
import EventIcon from '@material-ui/icons/Event';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import { useState, useEffect } from 'react';
import axios from 'axios';


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

export default function Trending() {
    const [count, setCount] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios.get('http://localhost:8081/info')
  .then(function (response) {
    // handle success
    console.log(response);
    setCount(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  },[0]);
      });

    return (
        <div className="trendings">
            <div className={classes.root} id="trend-content">
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={6} sm={6}>
                            <img src={Nature} alt="Nature" />
                        </Grid>
                        <Grid item xs={6} sm={6}>
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
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                    <Grid item xs={4} sm={4}>
                            <Paper className={classes.paper} id="left-image">
                            <img src={Pen} alt="Nature" />
                            <h3>Arctic sea ice extent hits</h3>
                                <h3>record low for winter</h3>
                                <h3>maximum</h3>
                                <Toolbar>
                                    <List component="nav" className={classes.root} aria-label="contacts">
                                        <ListItem button className="return">
                                            <ListItemIcon>
                                                <SmokingRoomsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="CNN" />
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
                        <Grid item xs={4} sm={4}>
                            <Paper className={classes.paper} id="left-image">
                            <img src={Phone} alt="Nature" />
                            <h3>Now battery for smartphones</h3>
                                <h3>can now charge in a minute</h3>
                                <Toolbar>
                                    <List component="nav" className={classes.root} aria-label="contacts">
                                        <ListItem button className="gardian">
                                            <ListItemIcon>
                                                <SmokingRoomsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Return" />
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
                        <Grid item xs={4} sm={4}>
                            <Paper className={classes.paper} id="left-image">
                            <img src={Leaf} alt="Nature" />
                            <h3>The best Tropical plants you</h3>
                                <h3>can grow indoors</h3>
                                <Toolbar>
                                    <List component="nav" className={classes.root} aria-label="contacts">
                                        <ListItem button className="return">
                                            <ListItemIcon>
                                                <SmokingRoomsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="CNN" />
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
            </div>
        </div>
    );
}