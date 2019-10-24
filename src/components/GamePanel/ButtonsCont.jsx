import React, { useState, useEffect } from 'react';
import {
    Grid,
    Button,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as cardsActions from '../redux/actions/cardsActions';

const useStyles = makeStyles(theme => ({
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

const ButtonsCont = ({ selectCard, deleteCard, player2Nickname, selectedCard1, cards1, cards2, activePlayer, setActive }) => {
    const [selectedFakeCard, setSelectedFakeCard] = useState(0)
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
        setSelectedFakeCard(null)
    }

    return (
            <Grid container className={classes.buttonCont} item lg={4} onClick={pickCard}>
                {
                    cards.length ?
                    <Button className={classes.instructionButton}>
                        Get Card
                    </Button>
                    :
                    <Link to="/game">
                        <Button className={classes.playButton}>
                            <Typography>
                                Try again!
                            </Typography>
                        </Button>
                    </Link>
                }
            </Grid>
    )
}

ButtonsCont.propTypes = {
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

ButtonsCont.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsCont)
