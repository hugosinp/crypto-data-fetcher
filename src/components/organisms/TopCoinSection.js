import React from 'react'
import {
    SimpleGrid,
    Heading,
    Stack
} from '@chakra-ui/react';
import { GiTrophy } from 'react-icons/gi'

import CoinCard from '../molecules/CoinCard'
import CoinCardSkeleton from '../molecules/CoinCardSkeleton'

const TopCoinSection = ({ loading, topCoinList, error  }) => {
    return (
        <Stack direction={'column'}>
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
        </Stack>
    )
}

export default TopCoinSection