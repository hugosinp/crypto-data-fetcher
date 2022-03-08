import { localStorageConstantsIndex } from '../constants/localStorageConstants'

export const getFavoriteCoinList = () => async (dispatch) => {
    try{
        dispatch({
            type: localStorageConstantsIndex.GET_COIN_LOCAL_STORAGE_REQUEST
        })

        let favoriteCoinList = []

        for (let a in localStorage) {
            favoriteCoinList.push(localStorage[a])
        }
        
        dispatch({
            type: localStorageConstantsIndex.GET_COIN_LOCAL_STORAGE_SUCCESS,
            payload: favoriteCoinList
        })

    } catch(error) {
        dispatch({
            type: localStorageConstantsIndex.GET_COIN_LOCAL_STORAGE_FAILURE,
            payload: error.response
        })
    }
}

export const setFavoriteCoin = (coinSymbol) => async (dispatch) => {
    try{
        dispatch({
            type: localStorageConstantsIndex.SET_COIN_LOCAL_STORAGE_REQUEST
        })

        localStorage.setItem(coinSymbol, coinSymbol)

        dispatch({
            type: localStorageConstantsIndex.SET_COIN_LOCAL_STORAGE_SUCCESS,
        })

    } catch(error) {
        dispatch({
            type: localStorageConstantsIndex.SET_COIN_LOCAL_STORAGE_FAILURE,
            payload: error.response
        })
    }
}

export const removeFavoriteCoin = (coinSymbol) => async (dispatch) => {
    try{
        dispatch({
            type: localStorageConstantsIndex.DELETE_COIN_LOCAL_STORAGE_REQUEST
        })

        localStorage.removeItem(coinSymbol)

        dispatch({
            type: localStorageConstantsIndex.DELETE_COIN_LOCAL_STORAGE_SUCCESS,
        })

    } catch(error) {
        dispatch({
            type: localStorageConstantsIndex.DELETE_COIN_LOCAL_STORAGE_FAILURE,
            payload: error.response
        })
    }
}