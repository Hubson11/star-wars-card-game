import * as constants from '../constants';

const initialState = {
    loading: false,
    error: {},
    cards1: [],
    cards2: [],
    selectedCard1: null,
    selectedCard2: null,
    activePlayer: '1'
}

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.fetchCardsStart: {
        return {
            ...state,
            loading: true,
        }
      }
      case constants.fetchCardsError: {
        return {
            error: action.payload,
            loading: false,
        }
      }
      case constants.fetchCardsSuccess: {
          const { data: { data: { results } }, playerId } = action.payload;
          return {
            ...state,
            [`cards${playerId}`]: results,
            loading: false,
          };
      }
      case constants.deleteCard: {
          const { name, id } = action.payload
          const stateCopy = {...state}
          const newCards = stateCopy[`cards${id}`].filter(card => card.name !== name)
          return {
              ...state,
              [`cards${id}`]: newCards,
          }
      }

      case constants.selectCard: {
          const { card, playerId } = action.payload
          return {
              ...state,
              [`selectedCard${playerId}`]: card
          }
      }

      case constants.resetCards: {
          return {
              ...state,
              selectedCard1: null,
              selectedCard2: null,
          }
      }
      case constants.setActive: {
          return {
              ...state,
              activePlayer: action.payload.playerId,
          }
      }
      default:
        return state;
    }
};
