import { legacy_createStore , combineReducers, compose, applyMiddleware } from "redux"
import  thunk from "redux-thunk"
import handleNumReducer from "./NumStatus/reducer"
import handleArrReducer from "./ArrStatus/reducer"

const reducers = combineReducers({
    handleNumReducer,
    handleArrReducer
})

// const store = legacy_createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const store = legacy_createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
export default store