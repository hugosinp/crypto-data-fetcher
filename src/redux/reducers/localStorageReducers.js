import { localStorageConstantsIndex } from '../constants/localStorageConstants'

const initialLocalStorageState = { 
    loading: false, 
    favoriteCoinList: [], 
    error: null 
}

export const localStorageReducer = (state = initialLocalStorageState, action) => {
    switch(action.type){
        case localStorageConstantsIndex.SET_COIN_LOCAL_STORAGE_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case localStorageConstantsIndex.SET_COIN_LOCAL_STORAGE_SUCCESS:
            const coinSymbol = action.payload
            const existCoinSymbol = state.favoriteCoinList.find(coin => coin === coinSymbol)
            
            if (existCoinSymbol) {
                return {
                    loading: false,
                    favoriteCoinList: state.favoriteCoinList.filter(coin => coin !== coinSymbol),
                }
            } else {
                return {
                    loading: false,
                    favoriteCoinList: [...state.favoriteCoinList, coinSymbol],
                }
            }            

        case localStorageConstantsIndex.SET_COIN_LOCAL_STORAGE_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}