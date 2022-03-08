import { coinConstantsIndex } from '../constants/coinConstants'

import axios from 'axios'

export const getCoinList = () => async (dispatch) => {
    try{
        dispatch({
            type: coinConstantsIndex.COIN_LIST_REQUEST
        })

        // API CALL
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')

        dispatch({
            type: coinConstantsIndex.COIN_LIST_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: coinConstantsIndex.COIN_LIST_FAILURE,
            payload: error.response
        })
    }
}