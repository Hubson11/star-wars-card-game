import React from 'react';
import {
    makeStyles,
    Grid,
    Typography,
    Button,
    CardContent
} from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    container: {
        maxWidth: '1170px',
        margin: '0 auto',
    },
    infoBox: {
        margin: '0 auto',
    },
    infoText: {
        fontSize: 16,
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px',
        color: "lightgray",
    },
    header: {
      textAlign: 'center',
    },
    buttonWrapper: {
      justifyContent: 'center', 
      alignItems: 'center', 
      textAlign: 'center', 
      flexDirection: 'column',
    },
    buttonCont: {
      fontSize: 18,
      margin: '20px auto',
      borderRadius: '8px',
      textDecoration: 'none',
    },
    playButton: {
        color: '#FFFFFF',
        backgroundColor: 'green',
    }
});

export const LandingPage = () => {
    const classes = useStyles();
    return(
        <CardContent className={classes.container}>
            <Grid item lg={6} className={classes.infoBox}>
                <Typography className={classes.infoText}>
                    Supreme Leader Snoke now deploys his merciless legions to seize military control of the galaxy.
                    Only General Leia Organa's band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight.
                    But the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....
                </Typography>
            </Grid>
            <Grid container className={classes.buttonWrapper}>
                <Link to="/game" className={classes.buttonCont}>
                    <Button className={classes.playButton}>
                        Play the game
                    </Button>
                </Link>
            </Grid>
        </CardContent>
    )
}