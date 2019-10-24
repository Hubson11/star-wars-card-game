import React from 'react';
import {
    makeStyles,
    CardContent,
    Typography,
    Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    key: {
        fontSize: 14,
        color: 'silver',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 10,
        },
    },
    value: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 12,
        },
    },
}));

export const CustomCardContent = ({ height, birthYear, eyeColor, hairColor, skinColor }) => {
    
    const renderLeft = () => (
        <Grid item xs={6}>
            <Typography className={classes.key}>
                Height
            </Typography>
            <Typography className={classes.value}>
                {height}
            </Typography>
            <Typography className={classes.key}>
                Skin color
            </Typography>
            <Typography className={classes.value}>
                {skinColor}
            </Typography>
        </Grid>
    )

    const renderRight = () => (
        <Grid item xs={6} >
            <Typography className={classes.key}>
                Eye color
            </Typography>
            <Typography className={classes.value}>
                {eyeColor}
            </Typography>
            <Typography className={classes.key}>
                Hair color
            </Typography>
            <Typography className={classes.value}>
                {hairColor}
            </Typography>
        </Grid>
    )

    const renderBottom = () => (
        <Grid item xs={12}>
            <Typography className={classes.key}>
                Birth year
            </Typography>
            <Typography className={classes.value}>
                {birthYear}
            </Typography>
        </Grid>
    )

    const classes = useStyles();
    return(
        <CardContent>
            <Grid container>
                {renderLeft()}
                {renderRight()}
                {renderBottom()}
            </Grid>
        </CardContent>
)}

CustomCardContent.propTypes = {
    height: PropTypes.string.isRequired,
    birthYear: PropTypes.string.isRequired,
    eyeColor: PropTypes.string.isRequired, 
    hairColor: PropTypes.string.isRequired,
    skinColor: PropTypes.string.isRequired,
}