import axios from 'axios';
import * as constants from '../constants';

export function fetchCardsStart() {
    return {
      type: constants.fetchCardsStart
    }
  }
  
  export function fetchCardsSuccess(data, playerId) {
    return {
      type: constants.fetchCardsSuccess,
      payload: {
          data,
          playerId,
      }
    }
  }
  
  export function fetchCardsError(error) {
    return {
      type: constants.fetchCardsError,
      payload: {
        error
      }
    }
  }
  
  export function fetchCards(playerId) {
    return (dispatch) => {
      dispatch(fetchCardsStart());
      const random = constants.getRandom(7, 1)  
      axios.get(`https://swapi.co/api/people/?page=${random}`)
        .then(data => dispatch(fetchCardsSuccess(data, playerId)))
        .catch(error => dispatch(fetchCardsError(error)))
    }
  }

  export function deleteCard(name, id){
      return{
          type: constants.deleteCard,
          payload: {
              name,
              id
          }
      }
  }

  export function selectCard(card, playerId){
    return{
        type: constants.selectCard,
        payload: {
            card,
            playerId,
        }
    }
}

export function resetCards(){
  return{
    type: constants.resetCards,
  }
}

export function setActive(playerId){
  return {
    type: constants.setActive,
    payload: {
      playerId
    }
  }
}