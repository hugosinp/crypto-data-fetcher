import { Box, Heading, Text } from '@chakra-ui/react';

const ErrorMessage = (error) => {

  console.log(error.error);

  return (
    <Box textAlign="center" height={'100vh'} py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        {error.error.status}
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Oops ! An error occured...
      </Text>
      <Text color={'gray.500'} mb={6}>
        message : {error.error.data.error}
      </Text>
    </Box>
  );
}

export default ErrorMessage;