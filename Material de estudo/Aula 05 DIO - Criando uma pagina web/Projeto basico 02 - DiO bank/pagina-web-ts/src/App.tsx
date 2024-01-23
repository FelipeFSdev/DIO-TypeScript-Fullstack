import { Box, Button, Center, ChakraProvider, Input, Text } from '@chakra-ui/react';
import { Layout } from './Components/Layout';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Layout />
        <Box backgroundColor='white' borderRadius='10px' padding='15px'>
          <Center>
            <Text
              fontSize="2xl"
              fontWeight="600">
              Realize login antes de continuar
            </Text>
          </Center>
          <form>
            <Input type='email' placeholder='email' />
            <Input type='password' placeholder='senha' />
            <Button colorScheme='blue' size='sm' marginTop='5px' type='submit'>
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </ChakraProvider >
  );
}

export default App;
