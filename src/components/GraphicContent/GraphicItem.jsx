import React from 'react';
import {
    makeStyles,
    Grid,
    Typography,
    Card,
    CardMedia,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    imageWrapper: {
        height: 0,
        padding: '40%',
    },
    selectedOffset: {
        outlineOffset: '10px',
        outline: '5px solid silver',
    },
    graphicTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: theme.palette.color.white,
    },
    graphicItemCont: {
        margin: '25px auto',
    },
}));

export const GraphicItem = ({ selectedGame, setSelectedGame, title, image }) => {
    const classes = useStyles();
    const offsetBool = selectedGame === title.toLowerCase() 
    return(
        <Grid
            item
            xs={12}
            sm={5}
            className={clsx(classes.graphicItemCont, offsetBool && classes.selectedOffset)}
            id={title}
            onClick={() => setSelectedGame(title.toLowerCase())}
        >
            <Typography className={classes.graphicTitle}>
                {title.toUpperCase()}
            </Typography>
            <Card>
                <CardMedia
                    className={classes.imageWrapper}
                    image={image}
                    title={title}
                />
            </Card>
        </Grid>
)}


GraphicItem.propTypes = {
    selectedGame: PropTypes.string.isRequired,
    setSelectedGame: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}