import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Heading,
    Stack,
    IconButton,
    SimpleGrid
} from '@chakra-ui/react';

import { AiFillStar } from 'react-icons/ai'

import { getCoinList } from '../redux/actions/coinActions'
import { setFavoriteCoin } from '../redux/actions/localStorageActions'

import CoinFavoriteCard from '../components/molecules/CoinFavoriteCard'

const FavoritePage = () => {

    const dispatch = useDispatch();

    const coinListData = useSelector(state => state.coinListData);
    const localStorageData = useSelector(state => state.localStorageData);

    const {
        coinList,
    } = coinListData;

    const {
        favoriteCoinList
    } = localStorageData;

    useEffect(() => {
        dispatch(getCoinList());
    }, [dispatch])

    return (
        <Container maxWidth={'5xl'} py={40}>
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
                                    <IconButton
                                        fontSize='20px'
                                        icon={<AiFillStar color='#ECC94B'/>}
                                        onClick={() => {console.log("remove"); dispatch(setFavoriteCoin(coin.symbol))}}
                                    />
                                    <CoinFavoriteCard 
                                        coin={coin}
                                    />
                                </Stack>
                        )
                    })
                }
            </SimpleGrid>
        </Container>
    )
}

export default FavoritePage