import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Container,
    SimpleGrid,
    Heading,
    Stack
} from '@chakra-ui/react';

import { GiTrophy, GiCoins } from 'react-icons/gi'

import CoinCard from '../components/CoinCard'
import CoinCardSkeleton from '../components/CoinCardSkeleton'
import CoinTable from '../components/CoinTable'
import CoinPerformance from '../components/CoinPerformance'
import ErrorMessage from '../components/ErrorMessage'

import { getCoinList } from '../redux/actions/coinActions'
import { setFavoriteCoin, removeFavoriteCoin } from '../redux/actions/localStorageActions'

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

    console.log(favoriteCoinList);

    return (
        <Container maxWidth={'5xl'} py={34}>
            <CoinPerformance 
                gainerList={gainerList}
                loserList={loserList}
            />

            <Stack direction={'row'} spacing={4}>
                <Heading align={'flex-start'}>
                    Top coins 
                </Heading>
                <GiTrophy 
                    color='#ECC94B'
                    size={40}
                />
            </Stack>
        
            {
                loading ?
                    <CoinCardSkeleton />
                : error ?
                    <ErrorMessage 
                        error={error}
                    />
                :
                    <SimpleGrid columns={{ base: 1, lg: 4 }} spacing='50px' py={10}>
                        {
                            topCoinList.map(coin => {
                                return (
                                    <CoinCard
                                        key={coin.symbol}
                                        loading={loading}
                                        coin={coin}
                                        error={error}
                                    />
                                )
                            })
                        }
                    </SimpleGrid>
            }

            <Stack direction={'row'} spacing={4}>
                <Heading align={'flex-start'}>
                    All coins 
                </Heading>
                <GiCoins 
                    color='#63B3ED'
                    size={40}    
                />
            </Stack>
            {
                loading ?
                    <CoinCardSkeleton />
                : error ?
                    <ErrorMessage 
                        error={error}
                    />
                :
                    <CoinTable 
                        coinList={coinList}
                        favoriteCoinList={favoriteCoinList}
                        setFavoriteCoin={setFavoriteCoin}
                        removeFavoriteCoin={removeFavoriteCoin}
                    />
            }
        </Container>
    )
}

export default HomePage