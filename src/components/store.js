import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../ducks/fetch';

// Note: this API requires redux@>=3.1.0
const store = createStore(Reducer, applyMiddleware(thunk));

export default store;
