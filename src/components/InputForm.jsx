import React from 'react';
import {
    makeStyles,
    Grid,
    FormControl,
    TextField,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    container: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        margin: '20px auto',
    },
    centerGrid: {
        margin: '10px auto',
    },
    input: {
        color: theme.palette.color.white,
        backgroundColor: theme.palette.color.sillver,
    }
}));

export const InputForm = ({ playerNick, setPlayerNick, playerNumber }) => {
    const classes = useStyles()
    const nick = `Player ${playerNumber} Nick`
    return (
        <Grid item xs={12} lg={6} className={classes.centerGrid}>
                <FormControl fullWidth>
                    <TextField
                        id={playerNick}
                        variant="outlined"
                        className={classes.input}
                        label={nick}
                        value={playerNick}
                        onChange={(e) => setPlayerNick(e.target.value)}
                    />
                </FormControl>
        </Grid>
    )
}

InputForm.propTypes = {
    playerNumber: PropTypes.number.isRequired,
    playerNick: PropTypes.string.isRequired,
    setPlayerNick: PropTypes.func.isRequired,
}
