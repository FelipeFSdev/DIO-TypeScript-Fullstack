import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Account from './Pages/Account';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './Components/Header/Header';
import { AppContextProvider } from './Components/AppContext';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account/:id" element={<Account />} />
          </Routes>
        </AppContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
