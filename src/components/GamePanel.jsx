import React, { useState, useEffect } from 'react';
import {
    Grid,
    Button,
    makeStyles,
    Typography,
    Card,
} from '@material-ui/core';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    contentWrapper: {
        justifyContent: 'center',
        margin: '20px auto',
        padding: 10,
    },
    contentGrid: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selectedCard: {
        outline: '3px solid green',
        outlineOffset: '5px',
    },
    fakeCard: {
        backgroundColor: 'gray',
        borderRadius: '8px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        height: '50px',
        width: '40px',
        margin: '10px',
        [theme.breakpoints.up('md')]: {
            margin: '10px',
            height: '140px',
            width: '100px',
        },
    },
    buttonCont: {
      fontSize: 18,
      borderRadius: '8px',
      textDecoration: 'none',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: '0 auto',
    },
    instructionButton: {
        color: '#000000',
        backgroundColor: 'silver',
    },
    playButton: {
        color: '#FFFFFF',
        backgroundColor: 'green',
    },
}));

export const GamePanel = ({ setPickedCard1, setPickedCard2, setActivePlayer, activePlayer, data1, data2, player2, pickedCard1 }) => {
    const [selectedFakeCard, setSelectedFakeCard] = useState(0)
    const [player1Cards, setPlayer1Cards] = useState(data1)
    const [player2Cards, setPlayer2Cards] = useState(data2)
    const classes = useStyles();

    useEffect(() => {
        if(player2 === 'Computer' && pickedCard1){
            const random = Math.floor(Math.random() * player2Cards.length);
            setPickedCard2(player2Cards[random]);
        }
    }, [pickedCard1])

    const cards = (activePlayer === '1') ? player1Cards : player2Cards;

    const pickCard = () => {
        if(activePlayer === '1'){
            const newData = player1Cards.filter(playerCard => playerCard.name !== selectedFakeCard.name)
            setPickedCard1(selectedFakeCard)
            setPlayer1Cards(newData)
            if(player2 !== 'Computer'){
                setActivePlayer('2')
            }
        } else {
            setActivePlayer('1')
            setPickedCard2(selectedFakeCard)
            const newData = player2Cards.filter(playerCard => playerCard.name !== selectedFakeCard.name)
            setPlayer2Cards(newData)
        }
        setSelectedFakeCard('')
    }

    const setActiveFakeCard = (card) => {
        setSelectedFakeCard(card)
    }

    return (
        <Grid container>
            <Grid container item xs={12} className={classes.contentWrapper}>
                <Grid container item xs={12} className={classes.contentGrid}>
                    <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} item xs={12}>
                        {cards.map(card => (
                            <Grid key={card.name}>
                                <Card 
                                    id={card.name}
                                    className={clsx(selectedFakeCard.name === card.name && classes.selectedCard, classes.fakeCard)}
                                    onClick={() => setActiveFakeCard(card)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.buttonCont} item lg={4} onClick={pickCard}>
                {
                    cards.length ?
                    <Button className={classes.instructionButton}>
                        Get Card
                    </Button>
                    :
                    <Link to="/game">
                        <Typography>
                            Try again!
                        </Typography>
                    </Link>
                }
            </Grid>
        </Grid>
    )
}

GamePanel.propTypes = {
    setPickedCard1: PropTypes.func.isRequired,
    setPickedCard2: PropTypes.func.isRequired,
    setActivePlayer: PropTypes.func.isRequired,
    activePlayer: PropTypes.string.isRequired,
    data1: PropTypes.arrayOf(PropTypes.shape({
        height: PropTypes.string,
        birthYear: PropTypes.string,
        eyeColor: PropTypes.string, 
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
    })).isRequired,
    data2: PropTypes.arrayOf(PropTypes.shape({
        height: PropTypes.string,
        birthYear: PropTypes.string,
        eyeColor: PropTypes.string, 
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
    })).isRequired,
    player2: PropTypes.string.isRequired,
    pickedCard1: PropTypes.shape({
        height: PropTypes.string,
        birthYear: PropTypes.string,
        eyeColor: PropTypes.string, 
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
    }),
}

GamePanel.defaultProps = {
    pickedCard1: {
        height: '',
        birthYear: '',
        eyeColor: '', 
        hairColor: '',
        skinColor: '',
        mass: '',
        name: '',
    },
}
