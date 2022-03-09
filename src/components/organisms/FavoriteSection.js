import React from 'react'
import {
    Heading,
    Stack,
    SimpleGrid,
    Box,
    Text
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import { AiFillStar } from 'react-icons/ai'

import CoinFavoriteCard from '../molecules/CoinFavoriteCard'
import CoinCardSkeleton from '../molecules/CoinCardSkeleton'

const FavoriteSection = ({ loading, coinList, favoriteCoinList, setFavoriteCoin }) => {
    
    return (
        <Stack direction={'column'} py={5} align={'center'}>
            <Stack direction={'row'} pb={5}>
                <AiFillStar 
                    color='#ECC94B'
                    size={40}
                />
                <Heading>
                    Favorite Coins
                </Heading>
                <AiFillStar 
                    color='#ECC94B'
                    size={40}
                />
            </Stack>
            {
                loading ?
                    <CoinCardSkeleton />
                : favoriteCoinList.length !== 0 ?
                    <SimpleGrid columns={{ base: 1, lg: 4 }} spacing='50px' py={10} align={'center'}>
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
                :
                    <Box textAlign="center" py={10} px={6}>
                        <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
                        <Heading as="h2" size="xl" mt={6} mb={2}>
                            No favorite coins yet
                        </Heading>
                        <Text color={'gray.500'}>
                            Add your favorite through the home page !
                        </Text>
                    </Box>
            }
        </Stack>
    )
}

export default FavoriteSection