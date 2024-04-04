import { createStore} from 'redux';
import reducers from './Reducers';

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION_&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;