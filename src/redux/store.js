import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { coinListReducer } from './reducers/coinReducers'
import { localStorageReducer } from './reducers/localStorageReducers'

const reducer = combineReducers({
    coinListData: coinListReducer,
    localStorageData: localStorageReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store