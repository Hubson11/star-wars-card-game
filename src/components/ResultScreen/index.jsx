import React, { useState, useEffect } from 'react';
import {
    Grid,
    makeStyles,
} from '@material-ui/core';
import { CustomCard } from '../CustomCard';
import { UserResult } from './UserResult';
import { FakeCard } from './FakeCard';
import PropTypes from 'prop-types';
import RenderNames from './NamesComponent';
import { connect } from 'react-redux';
import * as cardsActions from '../../redux/actions/cardsActions';

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
        border: `1px dashed ${theme.palette.color.green}`,
        backgroundColor: 'transparent',
    },
    scoreContent: {
        margin: '15px auto',
        fontSize: 20,
        color: theme.palette.color.green,
        [theme.breakpoints.down('sm')]: {
            margin: '5px auto',
            fontSize: 12,
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

const ResultScreen = ({ resetCards, selectedCard1, selectedCard2 }) => {
    const [playerWin, setPlayerWin] = useState('')
    const [player1WinCount, setPlayer1WinCount] = useState(0)
    const [player2WinCount, setPlayer2WinCount] = useState(0)
    const [winCard, setWinCard] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        if(selectedCard1 && selectedCard2){
            const player1Mass = selectedCard1.mass === 'unknown' ? 0 : Number(selectedCard1.mass)
            const player2Mass = selectedCard2.mass === 'unknown' ? 0 : Number(selectedCard2.mass)
            if(player1Mass > player2Mass){
                setPlayerWin('1')
                setPlayer1WinCount(player1WinCount + 1)
                setWinCard(selectedCard1)
            } else if(player2Mass > player1Mass){
                setPlayerWin('2')
                setPlayer2WinCount(player2WinCount + 1)
                setWinCard(selectedCard2)
            } else if(player1Mass === player2Mass){
                setPlayer2WinCount(player2WinCount + 1)
                setPlayer1WinCount(player1WinCount + 1)
                setPlayerWin('0')
                setWinCard(selectedCard1)
            }
        }
        const timer = setTimeout(() => {
            if(selectedCard1 && selectedCard2){
                resetCards()
                setWinCard(null)
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [selectedCard1, selectedCard2])

    const renderResult = () => (
        <Grid>
            {winCard ?
                <CustomCard data={winCard} />
            :
                <FakeCard />
            }
        </Grid>
    )

    return(
        <Grid container>
            <RenderNames 
                playerWin={playerWin}
            />
            <Grid item xs={4} className={classes.sideWrapper}>
                <UserResult 
                    winCount={player1WinCount}
                    pickedCard={selectedCard1}
                />
            </Grid>
            <Grid item xs={4} className={classes.sideWrapper}>
                {renderResult()}
            </Grid>
            <Grid item xs={4} className={classes.sideWrapper}>
            <UserResult 
                winCount={player2WinCount}
                pickedCard={selectedCard2}
            />
            </Grid>
        </Grid>
    )
}

ResultScreen.propTypes = {
    resetCards: PropTypes.func.isRequired,
    selectedCard1: PropTypes.shape({
        height: PropTypes.string,
        birthYear: PropTypes.string,
        eyeColor: PropTypes.string, 
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
    }),
    selectedCard2: PropTypes.shape({
        height: PropTypes.string,
        birthYear: PropTypes.string,
        eyeColor: PropTypes.string, 
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
    }),
}

ResultScreen.defaultProps = {
    selectedCard2: {
        height: '',
        birthYear: '',
        eyeColor: '', 
        hairColor: '',
        skinColor: '',
        mass: '',
        name: '',
    },
    selectedCard1: {
        height: '',
        birthYear: '',
        eyeColor: '', 
        hairColor: '',
        skinColor: '',
        mass: '',
        name: '',
    },
}

const mapStateToProps = state => {
    return {
        selectedCard1: state.cardsReducer.selectedCard1,
        selectedCard2: state.cardsReducer.selectedCard2,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetCards: () => dispatch(cardsActions.resetCards()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultScreen)