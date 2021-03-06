import React from 'react'
import {
    Box,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Skeleton
} from '@chakra-ui/react';
import { FcBullish, FcBearish } from 'react-icons/fc'
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io'

import { motion } from 'framer-motion'

const CoinPerformanceSection = ({ loading, gainerList, loserList }) => {
    return (
        <Stack direction={'row'} spacing={4} py={10} overflow={'auto'}>
            <Box
                p={6}
                maxW={'500px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'md'}
                rounded={'3xl'}>
                
                <Stack direction={'row'} spacing={4}>
                    <Heading align={'flex-start'} pb={3}>
                        Gainers
                    </Heading>
                    <FcBullish size={40}/>
                </Stack>

                {
                    loading ?
                        <Stack>
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                        </Stack>
                    :
                        gainerList.map(gainer => {
                            return(
                                <motion.div
                                    key={gainer.symbol}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{
                                        scale: 0.8,
                                        borderRadius: "100%"
                                    }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                >
                                    <Stack direction={'row'} py={2} justify={'space-between'} >
                                        <Stack direction={'row'}>
                                            <Image
                                                boxSize='25px'
                                                objectFit='cover'
                                                src={gainer.image}
                                                alt={gainer.name}
                                                mr={2}
                                            />
                                            <Text fontWeight={'bold'}>{gainer.name}</Text>
                                            <Text color={'gray.500'}>{gainer.symbol.toUpperCase()}</Text>
                                        </Stack>
                                        <Stack direction={'row'} spacing={0}>
                                            <Box pt={1}>
                                                <IoMdArrowDropup color='#48BB78' />
                                            </Box>
                                            <Text color={'green.400'}>
                                                {gainer.price_change_percentage_24h.toFixed(2)}%
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </motion.div>
                            )
                        })
                }
            </Box>

            <Box
                p={6}
                maxW={'500px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'md'}
                rounded={'3xl'}>
                
                <Stack direction={'row'} spacing={4}>
                    <Heading align={'flex-start'} pb={3}>
                        Losers
                    </Heading>
                    <FcBearish size={40}/>
                </Stack>

                {
                    loading ?
                        <Stack>
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                            <Skeleton height='20px' />
                        </Stack>
                    :
                        loserList.map(loser => {
                            return(
                                <motion.div
                                    key={loser.symbol}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{
                                        scale: 0.8,
                                        borderRadius: "100%"
                                    }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20
                                    }}
                                >
                                    <Stack direction={'row'} py={2} justify={'space-between'}>
                                        <Stack direction={'row'}>
                                            <Image
                                                boxSize='25px'
                                                objectFit='cover'
                                                src={loser.image}
                                                alt={loser.name}
                                                mr={2}
                                            />
                                            <Text fontWeight={'bold'}>{loser.name}</Text>
                                            <Text color={'gray.500'}>{loser.symbol.toUpperCase()}</Text>
                                        </Stack>
                                        <Stack direction={'row'} spacing={0}>
                                            <Box pt={1}>
                                                <IoMdArrowDropdown color='#F56565' />
                                            </Box>
                                            <Text color={'red.400'}>
                                                {loser.price_change_percentage_24h.toFixed(2)}%
                                            </Text>
                                        </Stack>
                                    </Stack>
                                </motion.div>
                            )
                        })
                }
            </Box>
        </Stack>
    )
}

export default CoinPerformanceSection