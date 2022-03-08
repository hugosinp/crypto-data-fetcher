import React from 'react'
import {
    Box,
    SkeletonCircle, SkeletonText,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';
const CoinCardSkeleton = () => {

    const colorValue = useColorModeValue('white', 'gray.700');

    return (
        <Stack direction={'row'} spacing='50px'>                 
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
            <Box padding='6' boxShadow='lg' bg={colorValue} rounded={'3xl'}>
                <SkeletonCircle size='20' />
                <SkeletonText mt='4' noOfLines={3} spacing='4' align={'center'} />
            </Box>
        </Stack>
    )
}

export default CoinCardSkeleton