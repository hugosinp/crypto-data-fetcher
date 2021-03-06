import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@chakra-ui/react';

import { getCoinList } from '../redux/actions/coinActions'
import { setFavoriteCoin } from '../redux/actions/localStorageActions'
import FavoriteSection from '../components/organisms/FavoriteSection';


const FavoritePage = () => {

    const dispatch = useDispatch();

    const coinListData = useSelector(state => state.coinListData);
    const localStorageData = useSelector(state => state.localStorageData);

    const {
        loading,
        coinList,
    } = coinListData;

    const {
        favoriteCoinList,
    } = localStorageData;

    useEffect(() => {
        dispatch(getCoinList());
    }, [dispatch])

    return (
        <Container maxWidth={'6xl'} py={20}>
            <FavoriteSection
                loading={loading}
                coinList={coinList}
                favoriteCoinList={favoriteCoinList}
                setFavoriteCoin={setFavoriteCoin}
            />
        </Container>
    )
}

export default FavoritePage