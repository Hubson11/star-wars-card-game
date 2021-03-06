import React from 'react';
import {
    makeStyles,
    Grid,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { InputForm } from './InputForm';

const useStyles = makeStyles(theme => ({
    container: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        margin: '20px auto',
        color: theme.palette.color.white,
    },
    centerGrid: {
        margin: '10px auto',
    },
    input: {
        color: theme.palette.color.white,
        backgroundColor: theme.palette.color.silver,
    }
}));

export const SettingsForm = ({ selectedGame, player1Nick, player2Nick, setPlayer1Nick, setPlayer2Nick }) => {
    const classes = useStyles()

    return (
        <Grid container className={classes.container}>
            {selectedGame !== '' &&
                <InputForm
                    className={classes.input}
                    playerNick={player1Nick}
                    setPlayerNick={setPlayer1Nick}
                    playerNumber={1}
                />
            }
            {selectedGame === 'multiplayer' &&
                <InputForm 
                className={classes.input}
                playerNick={player2Nick}
                    setPlayerNick={setPlayer2Nick}
                    playerNumber={2}
                />
            }
        </Grid>
    )
}

SettingsForm.propTypes = {
    selectedGame: PropTypes.string.isRequired,
    player1Nick: PropTypes.string.isRequired,
    player2Nick: PropTypes.string.isRequired,
    setPlayer1Nick: PropTypes.func.isRequired,
    setPlayer2Nick: PropTypes.func.isRequired,
}