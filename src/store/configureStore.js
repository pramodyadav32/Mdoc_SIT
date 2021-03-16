
import rootReducer from '../reducers';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;