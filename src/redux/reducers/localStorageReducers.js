import { localStorageConstantsIndex } from '../constants/localStorageConstants'

const initialLocalStorageState = { 
    loading: false, 
    favoriteCoinList: [], 
    error: null 
}

export const localStorageReducer = (state = initialLocalStorageState, action) => {
    switch(action.type){
        case localStorageConstantsIndex.GET_COIN_LOCAL_STORAGE_REQUEST:
            return {
                loading: true,
                favoriteCoinList: [], 
                error: null
            }

        case localStorageConstantsIndex.GET_COIN_LOCAL_STORAGE_SUCCESS:
            return {
                loading: false,
                favoriteCoinList: action.payload,
                error: null
            }

        case localStorageConstantsIndex.GET_COIN_LOCAL_STORAGE_FAILURE:
            return {
                loading: false,
                favoriteCoinList: [],
                error: action.payload
            }

        default:
            return state
    }
}