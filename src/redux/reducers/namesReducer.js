import * as constants from '../constants';

const initialState = {
  type: '',
  player1Nickname: '',
  player2Nickname: '',
}

export const namesReducer = (state = initialState, action) => {
    switch (action.type) {
      case constants.setPlayerName: {
        const { type, player1Nickname, player2Nickname } = action.payload
        const player2 =  player2Nickname.length > 0 ? player2Nickname : 'Computer'
        return {
          ...state,
          type: type,
          player1Nickname: player1Nickname,
          player2Nickname: player2,
        };
      }
      default:
        return state;
    }
};
