import React from 'react'
import {
    Heading,
    Stack,
    Skeleton
} from '@chakra-ui/react';

import { GiCoins } from 'react-icons/gi'

import CoinTable from '../molecules/CoinTable'
import ErrorMessage from '../ErrorMessage'

const AllCoinSection = ({ loading, coinList, favoriteCoinList, setFavoriteCoin, error }) => {
    return (
        <Stack direction={'column'}>
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
                    <Stack py={5}>
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                    </Stack>
                : error ?
                    <ErrorMessage 
                        error={error}
                    />
                :
                    <CoinTable 
                        coinList={coinList}
                        favoriteCoinList={favoriteCoinList}
                        setFavoriteCoin={setFavoriteCoin}
                    />
            }
        </Stack>
    )
}

export default AllCoinSection