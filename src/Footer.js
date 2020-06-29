import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

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

export default function Footer() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
        <div className="footer">
            <div className={classes.root} id="trend-content">
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={0} sm={6}>
                        <Typography className={classes.subHeader}>
                <Link href="#" onClick={preventDefault}>
                    About
                </Link>
                <Link href="#" onClick={preventDefault}>
                    Terms and Conditions
                </Link>
                <Link href="#" onClick={preventDefault}>
                    Privacy Policy
                </Link>
                <Link href="#" onClick={preventDefault}>
                    Contact
                </Link>
                </Typography>
                </Grid>
                    <Grid item xs={0} sm={3}>
                        <div className="social-icons">
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    </div>
                    </Grid>
                <Grid item xs={0} sm={3}>
                <span className="copy-right">@2019 All rights reserved</span>
                        </Grid>
                    </Grid>
                    </Container>
        </div>
        </div>
    );
}