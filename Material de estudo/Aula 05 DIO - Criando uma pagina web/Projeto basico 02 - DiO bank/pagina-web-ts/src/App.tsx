import { Layout } from './Components/Layout';

import { ChakraProvider, Input } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <h1> Realize login antes de continuar </h1>
      <Input placeholder='email' />
      <Input placeholder='senha' />
    </ChakraProvider>
  );
}

export default App;
