import { createStore } from 'redux';
import reducers from '../_shared/reducers';

const store = createStore(reducers);

export default store;
