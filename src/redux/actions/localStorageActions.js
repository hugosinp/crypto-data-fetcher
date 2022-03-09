import { localStorageConstantsIndex } from '../constants/localStorageConstants'

export const setFavoriteCoin = (coinSymbol) => async (dispatch, getState) => {
    try{
        dispatch({
            type: localStorageConstantsIndex.SET_COIN_LOCAL_STORAGE_REQUEST
        })

        dispatch({
            type: localStorageConstantsIndex.SET_COIN_LOCAL_STORAGE_SUCCESS,
            payload: coinSymbol
        })

        localStorage.setItem('favoriteCoinList', JSON.stringify(getState().localStorageData.favoriteCoinList))

    } catch(error) {
        dispatch({
            type: localStorageConstantsIndex.SET_COIN_LOCAL_STORAGE_FAILURE,
            payload: error.response
        })
    }
}

export const removeFavoriteCoin = (coinSymbol) => async (dispatch, getState) => {
    try{
        dispatch({
            type: localStorageConstantsIndex.DELETE_COIN_LOCAL_STORAGE_REQUEST
        })

        dispatch({
            type: localStorageConstantsIndex.DELETE_COIN_LOCAL_STORAGE_SUCCESS,
            payload: coinSymbol
        })

        localStorage.setItem('favoriteCoinList', JSON.stringify(getState().localStorageData.favoriteCoinList))

    } catch(error) {
        dispatch({
            type: localStorageConstantsIndex.DELETE_COIN_LOCAL_STORAGE_FAILURE,
            payload: error.response
        })
    }
}