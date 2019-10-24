export const setPlayerName = 'SET_PLAYER_NAME'
export const fetchCardsStart = 'FETCH_CARDS_START'
export const fetchCardsError = 'FETCH_CARDS_ERROR'
export const fetchCardsSuccess = 'FETCH_CARDS_SUCCESS'
export const deleteCard = 'DELETE_CARD'
export const selectCard = 'SELECT_CARD'
export const resetCards = 'RESET_CARDS'
export const setActive = 'SET_ACTIVE'

export const getRandom = (from, to) => Math.floor(Math.random() * to) + from
