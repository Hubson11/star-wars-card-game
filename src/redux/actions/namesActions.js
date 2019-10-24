import * as constants from '../constants';

export function setPlayerName(data) {
    return {
        type: constants.setPlayerName,
        payload: data,
      }
}