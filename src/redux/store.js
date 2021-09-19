import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = (state = {}, action) => state;
const store = createStore(
    reducer,
    composeWithDevTools(),
    // applyMiddleware(...middleware),
);

export default store;
