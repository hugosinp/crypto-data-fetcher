import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Container,
    SimpleGrid,
    Heading,
    Stack
} from '@chakra-ui/react';

import { FcBullish } from 'react-icons/fc'

import CoinCard from '../components/CoinCard'
import CoinCardSkeleton from '../components/CoinCardSkeleton'
import CoinTable from '../components/CoinTable'
import CoinPerformance from '../components/CoinPerformance'
import ErrorMessage from '../components/ErrorMessage'

import { getCoinList } from '../redux/actions/coinActions'

const HomePage = () => {
    
    const dispatch = useDispatch();

    const coinListData = useSelector(state => state.coinListData);

    const {
        loading,
        coinList,
        topCoinList,
        gainerList,
        loserList,
        error
    } = coinListData;

    useEffect(() => {
        dispatch(getCoinList());
    }, [dispatch])

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
                <FcBullish size={40}/>
            </Stack>
        
            {
                loading ?
                    <CoinCardSkeleton />
                : error ?
                    <ErrorMessage 
                        error={error}
                    />
                :
                    <SimpleGrid columns={{ base: 1, lg: 5 }} spacing='50px' py={10}>
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
                <FcBullish size={40}/>
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
                    />
            }
        </Container>
    )
}

export default HomePage