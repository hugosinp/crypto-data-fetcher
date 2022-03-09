import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Heading,
    Stack,
    Text,
    IconButton
} from '@chakra-ui/react';

import { AiFillStar } from 'react-icons/ai'

import { getCoinList } from '../redux/actions/coinActions'
import { setFavoriteCoin } from '../redux/actions/localStorageActions'

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
            <Heading>
                Favorite Coins
            </Heading>
            <Stack direction={'row'}>
                {
                    coinList.map(coin => {
                        return(
                            favoriteCoinList.find(favorite => favorite === coin.symbol) &&
                                <Stack direction={'row'}>
                                    <IconButton
                                        fontSize='20px'
                                        icon={<AiFillStar color='#ECC94B'/>}
                                        onClick={() => {console.log("test"); dispatch(setFavoriteCoin(coin.symbol))}}
                                    />
                                    <Text>{coin.symbol}</Text>
                                </Stack>
                        )
                    })
                }
            </Stack>
        </Container>
    )
}

export default FavoritePage