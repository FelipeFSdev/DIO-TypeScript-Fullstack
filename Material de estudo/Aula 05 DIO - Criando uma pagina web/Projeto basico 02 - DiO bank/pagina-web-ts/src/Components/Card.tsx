import { Box, Center, ChakraProvider, Input, Text } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { Login } from "./Login"

export const Card = () => {
    return (
        <ChakraProvider>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px' margin="0px">
                <Header />
                <Box backgroundColor='white' borderRadius='10px' padding='15px'>
                    <Center>
                        <Text
                            fontSize="2xl"
                            fontWeight="600"
                            paddingBottom="3px">
                            Realize login antes de continuar
                        </Text>
                    </Center>
                    <form>
                        <Input type='email' placeholder='email' />
                        <Input type='password' placeholder='senha' />
                        <Login />
                    </form>
                </Box>
            </Box>
        </ChakraProvider >
    )
}