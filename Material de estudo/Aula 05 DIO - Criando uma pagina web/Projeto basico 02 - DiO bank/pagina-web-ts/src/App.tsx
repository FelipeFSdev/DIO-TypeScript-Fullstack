import { Box, Button, Center, ChakraProvider, Image, Input } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='white' borderRadius='10px' padding='15px'>
          <Center>
            <Image
              src='https://lp.dio.me/wp-content/uploads/2023/03/LOGO-DIO-COLOR.png' alt='DiO logo'
              boxSize='5%'
              marginBottom='5px'
            />
            <h1> Realize login antes de continuar </h1>
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
    </ChakraProvider>
  );
}

export default App;
