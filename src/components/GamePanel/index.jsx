import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as cardsActions from '../redux/actions/cardsActions';
import ButtonsCont from './ButtonsCont';
import { Cards } from './Cards';

const GamePanel = ({ selectCard, player2Nickname, selectedCard1, cards1, cards2, activePlayer }) => {
    const [selectedFakeCard, setSelectedFakeCard] = useState(0)

    useEffect(() => {
        if(player2Nickname === 'Computer' && selectedCard1){
            const random = Math.floor(Math.random() * cards2.length);
            selectCard(cards2[random], 2)
        }
    }, [selectedCard1])

    const cards = (activePlayer === '1') ? cards1 : cards2;

    const setActiveFakeCard = (card) => {
        setSelectedFakeCard(card)
    }

    return (
        <Grid container>
            <Cards 
                setActiveFakeCard={setActiveFakeCard} 
                cards={cards} 
                selectedFakeCard={selectedFakeCard}
            />
            <ButtonsCont />
        </Grid>
    )
}

GamePanel.propTypes = {
    selectCard: PropTypes.func.isRequired,
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
        selectCard: (card, playerId) => dispatch(cardsActions.selectCard(card, playerId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePanel)
