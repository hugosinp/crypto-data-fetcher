import { coinConstantsIndex } from '../constants/coinConstants'

const initialCoinListState = { 
    loading: false, 
    coinList: [], 
    topCoinList: [], 
    gainerList: [], 
    loserList: [],
    error: null 
}

export const coinListReducer = (state = initialCoinListState, action) => {
    switch(action.type){
        case coinConstantsIndex.GET_COIN_LIST_REQUEST:
            return {
                loading: true,
                coinList: [],
                topCoinList: [], 
                gainerList: [], 
                loserList: [],
                error: null
            }

        case coinConstantsIndex.GET_COIN_LIST_SUCCESS:
            return {
                loading: false,
                coinList: action.payload,
                topCoinList: action.payload.slice(0, 8),
                gainerList: action.payload.sort((a, b) => parseFloat(b.price_change_percentage_24h) - parseFloat(a.price_change_percentage_24h)).slice(0, 3),
                loserList: action.payload.sort((a, b) => parseFloat(a.price_change_percentage_24h) - parseFloat(b.price_change_percentage_24h)).slice(0, 3),
                error: null
            }

        case coinConstantsIndex.GET_COIN_LIST_FAILURE:
            return {
                loading: false,
                coinList: [],
                topCoinList: [], 
                gainerList: [], 
                loserList: [],
                error: action.payload
            }

        default:
            return state
    }
}

