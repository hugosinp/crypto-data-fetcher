import React from 'react'
import { useDispatch } from 'react-redux'

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Image,
    Stack,
    Text,
    IconButton,
    Box
} from '@chakra-ui/react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const CoinTable = ({ coinList, favoriteCoinList, setFavoriteCoin }) => {
    
    const dispatch = useDispatch();

    return (
        <Box overflow={'auto'}>
            <Table variant='simple' py={10}>
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>Rank</Th>
                        <Th>Coin</Th>
                        <Th isNumeric>Price</Th>
                        <Th isNumeric>24h %</Th>
                        <Th isNumeric>Market Cap</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        coinList.map(coin => {
                            return(
                                
                                <Tr key={coin.name}>

                                    <Td>
                                        {
                                            favoriteCoinList.find(favorite => favorite === coin.symbol) ?
                                                <IconButton
                                                    fontSize='20px'
                                                    icon={<AiFillStar color='#ECC94B'/>}
                                                    onClick={() => {dispatch(setFavoriteCoin(coin.symbol))}}
                                                />
                                            : 
                                                <IconButton
                                                    fontSize='20px'
                                                    icon={<AiOutlineStar />}
                                                    onClick={() => {dispatch(setFavoriteCoin(coin.symbol))}}
                                                />
                                        }
                                    </Td>

                                    <Td>{coin.market_cap_rank}</Td>
                                    <Td> 
                                        <Stack direction={'row'}>
                                            <Image
                                                boxSize='25px'
                                                objectFit='cover'
                                                src={coin.image}
                                                alt={coin.name}
                                                mr={2}
                                            />
                                            <Text>
                                                {coin.name}
                                            </Text>
                                        </Stack>

                                    </Td>
                                    <Td isNumeric>${coin.current_price.toFixed(3)}</Td>
                                    {
                                        coin.price_change_percentage_24h < 0 ?
                                            <Td color={'red.500'}  isNumeric>{coin.price_change_percentage_24h.toFixed(2)}%</Td>
                                        :
                                            <Td color={'green.400'} isNumeric>{coin.price_change_percentage_24h.toFixed(2)}%</Td>
                                    }
                                    
                                    <Td isNumeric>${coin.market_cap}</Td>
                                </Tr>
                            )
                        })
                    }
                    
                </Tbody>
            </Table>
        </Box>
    )
}

export default CoinTable