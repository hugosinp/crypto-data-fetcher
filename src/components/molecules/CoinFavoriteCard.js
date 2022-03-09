import React from 'react'
import { useDispatch } from 'react-redux'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    IconButton
} from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai'

const CoinFavoriteCard = ({ coin, setFavoriteCoin }) => {

    const dispatch = useDispatch();

    return (
        <Center py={8}>
            <Box
                role={'group'}
                p={6}
                maxW={'200px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'lg'}
                rounded={'3xl'}
                pos={'relative'}
                zIndex={1}>

                <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                maxHeight={'100px'}
                h={'full'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: '100px',
                    h: '100px',
                    pos: 'absolute',
                    top: 0,
                    backgroundImage: `url(${coin.image})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                    filter: 'blur(20px)',
                    },
                }}>
                    <Image
                        margin={'auto'}
                        align={'center'}
                        rounded={'lg'}
                        height={100}
                        width={100}
                        objectFit={'cover'}
                        src={coin.image}
                    />
                </Box>

                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {coin.symbol}
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {coin.name}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            ${coin.current_price.toFixed(2)}
                        </Text>
                    </Stack>
                    <IconButton
                        fontSize='20px'
                        icon={<AiFillStar color='#ECC94B'/>}
                        onClick={() => {console.log("remove"); dispatch(setFavoriteCoin(coin.symbol))}}
                    />
                </Stack>
            </Box>
        </Center>
    )
}

export default CoinFavoriteCard