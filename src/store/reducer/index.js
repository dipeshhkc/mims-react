import { menuReducer } from './menu.js';
import { openingReducer } from './OpeningStock.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  menu: menuReducer,
  opening: openingReducer
});

export default rootReducer;
