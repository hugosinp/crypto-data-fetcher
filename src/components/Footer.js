import React from 'react';
import { Box, Container, Link, Stack, Heading, Text, IconButton, useColorModeValue, Image } from '@chakra-ui/react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
                
                <Stack direction={'column'} alignItems="center" py={10} spacing={6}>
                    <Heading>Crypto Fetcher</Heading>
                    <Text fontStyle={'italic'} color={'gray.500'}>Powered by CoinGecko</Text>
                    <Image
                        boxSize='250px'
                        objectFit='contain'
                        src='https://static.coingecko.com/s/coingecko-branding-guide-4f5245361f7a47478fa54c2c57808a9e05d31ac7ca498ab189a3827d6000e22b.png'
                        alt='Dan Abramov'
                    />
                    <Stack direction={'row'} spacing={6}>
                        <Link href='https://github.com/hugosinp' isExternal>
                            <IconButton
                                aria-label="github"
                                variant="ghost"
                                size="lg"
                                icon={<BsGithub size={30}/>}
                                _hover={{
                                    bg: 'blue.500',
                                    color: useColorModeValue('white', 'gray.700'),
                                }}
                                isRound
                            />
                        </Link>
                        <Link href='https://www.linkedin.com/in/hugo-sinprasith-1b5367199/' isExternal>
                            <IconButton
                                aria-label="linkedin"
                                variant="ghost"
                                size="lg"
                                icon={<BsLinkedin size={30}/>}
                                _hover={{
                                    bg: 'blue.500',
                                    color: useColorModeValue('white', 'gray.700'),
                                }}
                                isRound
                            />
                        </Link>
                    </Stack>
                </Stack>

            </Container>
    
            <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ base: 'center', md: 'center' }} align={{ base: 'center', md: 'center' }}>
                    <Text>© Crypto Fetcher. All rights reserved</Text>
                </Container>
            </Box>
        </Box>
    )
};

export default Footer;