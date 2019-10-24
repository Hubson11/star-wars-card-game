import React from 'react';
import {
    Grid,
    Typography,
    makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    avatar: {
        backgroundColor: 'red',
        margin: '5px auto',
        [theme.breakpoints.down('sm')]: {
            margin: 0,
        },
    },
    footer: {
        borderTop: '1px solid gray',
        padding: '15px 0',
        textAlign: 'center',
        backgroundColor: 'silver',
        color: 'gray',
        fontSize: 16,
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
            padding: 0,
        },
    },
    massValue: {
        fontSize: 20,
        color: 'red',
        fontWeight: 700,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    createdValue: {
        fontSize: 12,
    },
    massKey: {
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
}));

export const CustomCardFooter = ({ mass, created }) => {
    const classes = useStyles();
    return(
        <Grid className={classes.footer}>
            <Typography className={classes.massKey}>
                Mass Power
            </Typography>
            <Typography className={classes.massValue}>
                {mass === 'unknown' ? '0' : mass}
            </Typography>
            <Typography className={classes.createdValue}>
                Created: {created ? created.slice(0, 10) : 'None'}
            </Typography>
        </Grid>
    )
}

CustomCardFooter.propTypes = {
    mass: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
}