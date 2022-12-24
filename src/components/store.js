import { legacy_createStore as createStore } from 'redux';

import rootReducer from "../components/reducers/index";


const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        serialize: true
     })
   );

export default store;