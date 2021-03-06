import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FiberSmartRecordIcon from '@material-ui/icons/FiberSmartRecord';
import WidgetsIcon from '@material-ui/icons/Widgets';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {
    Link
  } from "react-router-dom";
  import ApartmentIcon from '@material-ui/icons/Apartment';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
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
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
           <Link to="trending">
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <ApartmentIcon />
                        </IconButton>
                        </Link>
          <div className={classes.sectionDesktop}>
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
          </div>
         
		  <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
			  <ListItem button>
                            <ListItemIcon>
                                <AccountBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Lea Schneider" />
                        </ListItem>
            </div>
          </div>
		   <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
	  <div className="sub-header">
            <Container maxWidth="lg">
            <Grid item xs={0} sm={12}>
            <Typography className={classes.subHeader}>
                <Link to="trending">
                    Trending
                </Link>
                <Link href="#">
                    For You
                </Link>
                <Link href="#">
                    Cooking
                </Link>
                <Link href="#">
                    Nature
                </Link>
                <Link href="#">
                    Science
                </Link>
                <Link href="#">
                    Travel
                </Link>
                <Link href="#">
                    Climate
                </Link>
                <Link href="#">
                    Music
                </Link>
                <Link href="#">
                    People
                </Link>
                <Link href="/channel">
                <Button variant="contained">Explore</Button>
                </Link>
            </Typography>
            </Grid>
            </Container>
            </div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}