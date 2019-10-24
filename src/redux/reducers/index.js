import { combineReducers } from 'redux';
import { namesReducer } from './namesReducer';
import { cardsReducer } from './cardsReducer';

export default combineReducers({
    namesReducer,
    cardsReducer,
})