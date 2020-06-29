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
import EventIcon from '@material-ui/icons/Event';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import { useState, useEffect } from 'react';
import {
    Link
  } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Trending() {
    const [data, setData] = useState([]);
    const classes = useStyles();

    const fetchUser = async() => {
       const apiCall = await fetch('http://localhost:8081/info');
        const info = await apiCall.json();
        console.log(info);
        setData(info);
    }

    useEffect(() => {
        fetchUser();
      },[0]);

    return (
        
        <div className="trendings">
            <div className={classes.root} id="trend-content">
                <Container maxWidth="lg">
                <Link to="channel">
                    <Grid container>
                        <Grid item xs={0} sm={6}>
                            <img src={Nature} alt="Nature" />
                        </Grid>
                        <Grid item xs={0} sm={6}>
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
                    </Link>
                </Container>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        {data.length > 0 && data.map((item,key) => 
                    <Grid item xs={0} sm={4} key={key}>
                            <Paper className={classes.paper} id="left-image">
                            <img src={require(`${item.image}`)} alt="Nature" />
                          <h3>{item.title}</h3>
                                <Toolbar>
                                    <List component="nav" className={classes.root} aria-label="contacts">
                                        <ListItem button className={`return${key}`}>
                                            <ListItemIcon>
                                                <SmokingRoomsIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={item.icontitle} />
                                        </ListItem>
                                    </List>
                                    <ListItem button>
                                        <Button size="small" className="nature">
                                            {item.link}
                                        </Button>
                                    </ListItem>
                                </Toolbar>
                            </Paper>
                        </Grid>
                        )}
                    </Grid>
                </Container>
            </div>
        </div>
    );
}