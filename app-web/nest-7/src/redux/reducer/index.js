import handleCart from './handleCart';
import addItem from './addItem';
import {combineReducers} from 'redux';



const rootReducers = combineReducers({
    handleCart,
    addItem,
})

export default rootReducers;