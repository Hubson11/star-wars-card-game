import React from 'react';
import {
    makeStyles,
    Grid,
    Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { GraphicItem } from './GraphicItem';
import singlePlayer from '../../static/single_player.jpeg';
import multiPlayer from '../../static/multi_player.jpeg';

const useStyles = makeStyles(theme => ({
    graphicCont: {
        margin: '20px auto 40px',
        justifyContent: 'space-between',
        cursor: 'pointer',
    },
    gameModeLabel: {
        fontSize: 20,
        textAlign: 'center',
        color: theme.palette.color.white,
        margin: '10px auto',
    }
}));

export const GraphicContent = ({ selectedGame, setSelectedGame}) => {
    const classes = useStyles();
    return(
        <Grid container className={classes.graphicCont}>
            <Grid item container>
                <Typography className={classes.gameModeLabel}>
                    Choose Game Mode
                </Typography>
            </Grid>
            <GraphicItem 
                selectedGame={selectedGame}
                setSelectedGame={setSelectedGame}
                title="Single player"
                image={singlePlayer}
            />
            <GraphicItem 
                selectedGame={selectedGame}
                setSelectedGame={setSelectedGame}
                title="Multiplayer"
                image={multiPlayer}
            />
        </Grid>
    )
}

GraphicContent.propTypes = {
    selectedGame: PropTypes.string.isRequired,
    setSelectedGame: PropTypes.func.isRequired,
}