import { createStore } from 'redux';

// reducer
import authReducer from './authReducer';

const store = createStore(authReducer);

export default store;
