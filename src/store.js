import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

/* Para desarrollo */
/* const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
); */

/* Para produccion  */
const store = createStore(
   rootReducer,
   initialState,
   compose(
     applyMiddleware(...middleware)
   )
 );

export default store;
