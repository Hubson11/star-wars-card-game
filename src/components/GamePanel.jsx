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
import { connect } from 'react-redux';
import * as cardsActions from '../redux/actions/cardsActions';

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
        outline: `3px solid ${theme.palette.color.green}`,
        outlineOffset: '5px',
    },
    fakeCard: {
        backgroundColor: theme.palette.color.gray,
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
        color: theme.palette.color.black,
        backgroundColor: theme.palette.color.silver,
    },
    playButton: {
        color: theme.palette.color.main,
        backgroundColor: theme.palette.color.green,
    },
}));

const GamePanel = ({ selectCard, deleteCard, player2Nickname, selectedCard1, cards1, cards2, activePlayer, setActive }) => {
    const [selectedFakeCard, setSelectedFakeCard] = useState({ name: ''})
    const classes = useStyles();

    useEffect(() => {
        if(player2Nickname === 'Computer' && selectedCard1){
            const random = Math.floor(Math.random() * cards2.length);
            selectCard(cards2[random], 2)
        }
    }, [selectedCard1])

    const cards = (activePlayer === '1') ? cards1 : cards2;

    const pickCard = () => {
        deleteCard(selectedFakeCard.name, activePlayer)
        if(activePlayer === '1'){
            selectCard(selectedFakeCard, 1)
            if(player2Nickname !== 'Computer'){
                setActive('2')
            }
        } else {
            selectCard(selectedFakeCard, 2)
            setActive('1')
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
    deleteCard: PropTypes.func.isRequired,
    selectCard: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired,
    activePlayer: PropTypes.string.isRequired,
    player2Nickname: PropTypes.string.isRequired,
    cards1: PropTypes.arrayOf(PropTypes.shape({
        height: PropTypes.string,
        birthYear: PropTypes.string,
        eyeColor: PropTypes.string, 
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
    })).isRequired,
    cards2: PropTypes.arrayOf(PropTypes.shape({
        height: PropTypes.string,
        birthYear: PropTypes.string,
        eyeColor: PropTypes.string, 
        hairColor: PropTypes.string,
        skinColor: PropTypes.string,
        mass: PropTypes.string,
        name: PropTypes.string,
    })).isRequired,
    selectedCard1: PropTypes.shape({
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

const mapStateToProps = (state) => {
    return {
        cards1: state.cardsReducer.cards1,
        cards2: state.cardsReducer.cards2,
        selectedCard1: state.cardsReducer.selectedCard1,
        player2Nickname: state.namesReducer.player2Nickname,
        activePlayer: state.cardsReducer.activePlayer,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (name, id) => dispatch(cardsActions.deleteCard(name, id)),
        selectCard: (card, playerId) => dispatch(cardsActions.selectCard(card, playerId)),
        setActive: (playerId) => dispatch(cardsActions.setActive(playerId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePanel)
