import React, { useState, useEffect } from 'react';
import {
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { CustomCard } from '../CustomCard';
import { UserResult } from './UserResult';
import { FakeCard } from './FakeCard';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    container: {
        justifyContent: 'space-between',
        margin: '20px 0', 
        [theme.breakpoints.down('sm')]: {
            margin: '10px 0', 
        },
    },
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
    },
    card: {
        border: '1px dashed green',
        backgroundColor: 'transparent',
    },
    nicknameLabel: {
        textAlign: 'center',
        fontSize: 28,
        color: '#FFFFFF',
        fontWeight: 700,
        letterSpacing: 5,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
            letterSpacing: 1,
        },
    },
    finalResultScreen: {
        textAlign: 'center',
    },
    scoreContent: {
        margin: '15px auto',
        fontSize: 20,
        color: 'green',
        [theme.breakpoints.down('sm')]: {
            margin: '5px auto',
            fontSize: 12,
        },
    },
    winLabel: {
        fontSize: 20,
        color: 'green',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14,
        },
    },
    sideWrapper: {
        margin: '0 auto',
        width: 240,
        minHeight: 250,
        maxHeight: 370,
        [theme.breakpoints.down('md')]: {
            width: 190,
        },
        [theme.breakpoints.down('sm')]: {
            width: 125,
        },
    }
}));

export const ResultScreen = ({ setPickedCard1, setPickedCard2, pickedCardPlayer1, pickedCardPlayer2, player1, player2 }) => {
    const [playerWin, setPlayerWin] = useState('')
    const [player1WinCount, setPlayer1WinCount] = useState(0)
    const [player2WinCount, setPlayer2WinCount] = useState(0)
    const [winCard, setWinCard] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        if(pickedCardPlayer1 && pickedCardPlayer2){
            const player1Mass = pickedCardPlayer1.mass === 'unknown' ? 0 : Number(pickedCardPlayer1.mass)
            const player2Mass = pickedCardPlayer2.mass === 'unknown' ? 0 : Number(pickedCardPlayer2.mass)
            if(player1Mass > player2Mass){
                setPlayerWin('1')
                setPlayer1WinCount(player1WinCount + 1)
                setWinCard(pickedCardPlayer1)
            } else if(player2Mass > player1Mass){
                setPlayerWin('2')
                setPlayer2WinCount(player2WinCount + 1)
                setWinCard(pickedCardPlayer2)
            } else if(player1Mass === player2Mass){
                setPlayer2WinCount(player2WinCount + 1)
                setPlayer1WinCount(player1WinCount + 1)
                setPlayerWin('0')
                setWinCard(pickedCardPlayer1)
            }
        }
        const timer = setTimeout(() => {
            if(pickedCardPlayer1 && pickedCardPlayer2){
                setPickedCard1(null)
                setPickedCard2(null)
                setWinCard(null)
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [pickedCardPlayer1, pickedCardPlayer2])

    const renderResult = () => (
        <Grid>
            {winCard ?
                <CustomCard data={winCard} />
            :
                <FakeCard />
            }
        </Grid>
    )

    const renderNames = () => (
        <Grid container>
            <Grid item xs={4} className={classes.nicknameLabel} >
                {player1}
            </Grid>
            <Grid item xs={4} className={classes.finalResultScreen}>
                <Typography className={classes.winLabel}>
                    {playerWin &&
                        `${playerWin === '0' ? 'DRAW' : `Player ${playerWin} WIN!!!!!`}`
                    }
                </Typography>
            </Grid>
            <Grid item xs={4} className={classes.nicknameLabel} >
                {player2}
            </Grid>
        </Grid>
    )

    return(
        <Grid container>
            {renderNames()}
            <Grid item xs={4} className={classes.sideWrapper}>
                <UserResult 
                    winCount={player1WinCount}
                    pickedCard={pickedCardPlayer1}
                />
            </Grid>
            <Grid item xs={4} className={classes.sideWrapper}>
                {renderResult()}
            </Grid>
            <Grid item xs={4} className={classes.sideWrapper}>
            <UserResult 
                winCount={player2WinCount}
                pickedCard={pickedCardPlayer2}
            />
            </Grid>
        </Grid>
    )
}

ResultScreen.propTypes = {
    setPickedCard1: PropTypes.func.isRequired, 
    setPickedCard2: PropTypes.func.isRequired,
    pickedCardPlayer1: PropTypes.shape({
        height: PropTypes.string,
        birthYear: PropTypes.string,
        eyeColor: PropTypes.string, 
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
    }),
    pickedCardPlayer2: PropTypes.shape({
        height: PropTypes.string,
        birthYear: PropTypes.string,
        eyeColor: PropTypes.string, 
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
    }),
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired,
}

ResultScreen.defaultProps = {
    pickedCardPlayer2: {
        height: '',
        birthYear: '',
        eyeColor: '', 
        hairColor: '',
        skinColor: '',
        mass: '',
        name: '',
    },
    pickedCardPlayer1: {
        height: '',
        birthYear: '',
        eyeColor: '', 
        hairColor: '',
        skinColor: '',
        mass: '',
        name: '',
    },
}