import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ApartmentIcon from '@material-ui/icons/Apartment';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord';
import WidgetsIcon from '@material-ui/icons/Widgets';
import SearchIcon from '@material-ui/icons/Search';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    subHeader: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
        <div className={classes.root} id="header">
             <Container maxWidth="lg">
                    <Grid container>
            <AppBar position="fixed">
                <Grid item xs={12} sm={12}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <ApartmentIcon />
                        </IconButton>
                        <List component="nav" className={classes.root} aria-label="contacts">
                            <ListItem button>
                                <ListItemIcon>
                                    <ViewModuleIcon />
                                </ListItemIcon>
                                <ListItemText primary="CHANNELS" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <BookmarkIcon />
                                </ListItemIcon>
                                <ListItemText primary="BOOKMARKS" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FiberSmartRecordIcon />
                                </ListItemIcon>
                                <ListItemText primary="OVERVIEW" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <WidgetsIcon />
                                </ListItemIcon>
                                <ListItemText primary="WIDGETS" />
                            </ListItem>
                        </List>
                        <Button color="inherit"><SearchIcon /></Button>
                        <ListItem button>
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Lea Schneider" />
                        </ListItem>
                    </Toolbar>
                </Grid>
            </AppBar>
            </Grid>
            </Container>
            <div className="sub-header">
            <Container maxWidth="lg">
            <Grid item xs={12} sm={12}>
            <Typography className={classes.subHeader}>
                <Link href="/trending">
                    Trending
                </Link>
                <Link href="#" onClick={preventDefault}>
                    For You
                </Link>
                <Link href="#" onClick={preventDefault}>
                    Cooking
                </Link>
                <Link href="#" onClick={preventDefault}>
                    Nature
                </Link>
                <Link href="#" onClick={preventDefault}>
                    Science
                </Link>
                <Link href="#" onClick={preventDefault}>
                    Travel
                </Link>
                <Link href="#" onClick={preventDefault}>
                    Climate
                </Link>
                <Link href="#" onClick={preventDefault}>
                    Music
                </Link>
                <Link href="#" onClick={preventDefault}>
                    People
                </Link>
                <Link href="/channel">
                <Button variant="contained">Explore</Button>
                </Link>
            </Typography>
            </Grid>
            </Container>
            </div>
        </div>
    );
}