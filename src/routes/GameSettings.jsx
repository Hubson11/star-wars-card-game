import React, { useState } from 'react';
import {
    makeStyles,
    Grid,
    Typography,
    Button,
} from '@material-ui/core';
import { GraphicContent } from '../components/GraphicContent';
import { history } from '../App';
import { SettingsForm } from '../components/SettingsForm';
import * as namesActions from '../redux/actions/namesActions';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    container: {
        justifyContent: 'center',
        margin: '0 auto' 
    },
    buttonCont: {
      fontSize: 18,
      borderRadius: '8px',
      textDecoration: 'none',
    },
    playButton: {
        color: theme.palette.color.white,
        backgroundColor: theme.palette.color.green,
    },
    disabled: {
        backgroundColor: theme.palette.color.silver,
        color: theme.palette.color.gray,
    },
    titleCont: {
        margin: '20px auto 40px',
    },
    titleLabel: {
        fontSize: 18,
        textAlign: 'center',
        color: theme.palette.color.white
    },
    buttonWrapper: {
        justifyContent: 'center',
        textAlign: 'center'
    },
}));

const GameSettings = ({ setPlayerName }) => {
    const [selectedGame, setSelectedGame] = useState('');
    const [player1Nick, setPlayer1Nick] = useState('');
    const [player2Nick, setPlayer2Nick] = useState('');
    
    const classes = useStyles()

    const onClick = () => {
        const data = {
            type: selectedGame,
            player1Nickname: player1Nick, 
            player2Nickname: player2Nick,
        }
        setPlayerName(data)
        history.push('/play')
    }
    const renderButton = () => (
        <Grid container className={classes.buttonWrapper}>
            <Grid item xs={4}>
                <Button onClick={onClick} className={selectedGame === '' ? classes.disabled : classes.playButton}>
                    Play the game
                </Button>
            </Grid>
        </Grid>
    )
    
    const renderTitle = () => (
        <Grid className={classes.titleCont}>
            <Typography component="h2" className={classes.titleLabel}>
                Game settings
            </Typography>
        </Grid>
    )

    return(
        <Grid item lg={6} className={classes.container}>
            {renderTitle()}
            <GraphicContent 
                selectedGame={selectedGame}
                setSelectedGame={setSelectedGame}
            />
            <SettingsForm 
                selectedGame={selectedGame}
                player1Nick={player1Nick}
                player2Nick={player2Nick}
                setPlayer1Nick={setPlayer1Nick}
                setPlayer2Nick={setPlayer2Nick}
            />
            {renderButton()}
        </Grid>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setPlayerName: (name, type) => dispatch(namesActions.setPlayerName(name, type))
    }
}

export default connect(null, mapDispatchToProps)(GameSettings)