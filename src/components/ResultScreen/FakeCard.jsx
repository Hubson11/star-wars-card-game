import React from 'react';
import {
    Card,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
        margin: '0 auto',
        width: 240,
        minHeight: 250,
        maxHeight: 450,
        [theme.breakpoints.down('md')]: {
            width: 190,
        },
        [theme.breakpoints.down('sm')]: {
            width: 125,
        },
        border: '1px dashed green',
        backgroundColor: 'transparent',
    },
}));

export const FakeCard = () => {
    const classes = useStyles();
    return(
        <Card className={classes.card} />
    )
}