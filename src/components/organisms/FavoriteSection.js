import React from 'react'
import {
    Heading,
    Stack,
    SimpleGrid,
} from '@chakra-ui/react';

import { AiFillStar } from 'react-icons/ai'

import CoinFavoriteCard from '../molecules/CoinFavoriteCard'

const FavoriteSection = ({ coinList, favoriteCoinList, setFavoriteCoin }) => {

    return (
        <Stack direction={'column'} py={5}>
            <Stack direction={'row'}>
                <Heading>
                    Favorite Coins
                </Heading>
                <AiFillStar 
                    color='#ECC94B'
                    size={40}
                />
            </Stack>

            <SimpleGrid columns={{ base: 1, lg: 4 }} spacing='50px' py={10}>
                {
                    coinList.map(coin => {
                        return(
                            favoriteCoinList.find(favorite => favorite === coin.symbol) &&
                                <Stack key={coin.symbol}>
                                    
                                    <CoinFavoriteCard
                                        coin={coin}
                                        setFavoriteCoin={setFavoriteCoin}
                                    />
                                </Stack>
                        )
                    })
                }
            </SimpleGrid>
        </Stack>
    )
}

export default FavoriteSection