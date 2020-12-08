import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers/animeReducer';

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe( () => console.log("subscribe  : ", store.getState()));

export default store;