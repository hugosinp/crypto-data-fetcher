import React from 'react'
import {
    Box,
    SkeletonCircle, SkeletonText,
    useColorModeValue,
    SimpleGrid
} from '@chakra-ui/react';
const CoinCardSkeleton = () => {

    const colorValue = useColorModeValue('white', 'gray.700');

    return (
        <SimpleGrid columns={{ base: 1, lg: 4 }} spacing='50px' py={10} align={'center'}>                 
            <Box padding='6' boxShadow='lg' bg={colorValue} rounded={'3xl'}>
                <SkeletonCircle size='20' />
                <SkeletonText mt='4' noOfLines={3} spacing='4' align={'center'} />
            </Box>
            <Box padding='6' boxShadow='lg' bg={colorValue} rounded={'3xl'}>
                <SkeletonCircle size='20' />
                <SkeletonText mt='4' noOfLines={3} spacing='4' align={'center'} />
            </Box>
            <Box padding='6' boxShadow='lg' bg={colorValue} rounded={'3xl'}>
                <SkeletonCircle size='20' />
                <SkeletonText mt='4' noOfLines={3} spacing='4' align={'center'} />
            </Box>
            <Box padding='6' boxShadow='lg' bg={colorValue} rounded={'3xl'}>
                <SkeletonCircle size='20' />
                <SkeletonText mt='4' noOfLines={3} spacing='4' align={'center'} />
            </Box>
        </SimpleGrid>
    )
}

export default CoinCardSkeleton