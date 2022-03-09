import React from 'react'
import {
    Box,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'

const CoinPerformanceCard = ({ type, coin }) => {
    return (
        <Stack direction={'row'} py={2} justify={'space-between'} key={coin.symbol}>
            <Stack direction={'row'}>
                <Image
                    boxSize='25px'
                    objectFit='cover'
                    src={coin.image}
                    alt={coin.name}
                    mr={2}
                />
                <Text fontWeight={'bold'}>{coin.name}</Text>
                <Text color={'gray.500'}>{coin.symbol.toUpperCase()}</Text>
            </Stack>
            <Stack direction={'row'} spacing={0}>
                <Box pt={1}>
                    {type === "gainer" ? <IoMdArrowDropup color='#48BB78' /> : <IoMdArrowDropdown color='#F56565' />}
                </Box>
                <Text color={type === "gainer" ? 'green.400' : 'red.400'}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                </Text>
            </Stack>
        </Stack>
    )
}

export default CoinPerformanceCard