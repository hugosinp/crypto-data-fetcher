import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from '@chakra-ui/react';
import { getCoinList } from '../redux/actions/coinActions'
import { setFavoriteCoin } from '../redux/actions/localStorageActions'

import CoinPerformanceSection from '../components/organisms/CoinPerformanceSection'
import TopCoinSection from '../components/organisms/TopCoinSection';
import AllCoinSection from '../components/organisms/AllCoinSection';

const HomePage = () => {
    
    const dispatch = useDispatch();

    const coinListData = useSelector(state => state.coinListData);
    const localStorageData = useSelector(state => state.localStorageData);

    const {
        loading,
        coinList,
        topCoinList,
        gainerList,
        loserList,
        error
    } = coinListData;

    const {
        favoriteCoinList
    } = localStorageData;

    useEffect(() => {
        dispatch(getCoinList());
    }, [dispatch])

    return (
        <Container maxWidth={'5xl'} py={34}>
            <CoinPerformanceSection
                loading={loading}
                gainerList={gainerList}
                loserList={loserList}
            />

            <TopCoinSection
                loading={loading}
                topCoinList={topCoinList}
                error={error}
            />

            <AllCoinSection
                loading={loading}
                coinList={coinList}
                favoriteCoinList={favoriteCoinList}
                setFavoriteCoin={setFavoriteCoin}
            />
        </Container>
    )
}

export default HomePage