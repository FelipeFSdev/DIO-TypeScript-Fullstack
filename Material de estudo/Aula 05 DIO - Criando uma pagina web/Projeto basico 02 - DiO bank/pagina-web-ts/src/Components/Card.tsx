import { Box, ChakraProvider } from "@chakra-ui/react"


export const Card = ({ children }: any) => {

    return (
        <ChakraProvider>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                <Box backgroundColor='white' borderRadius='10px' padding='15px'>
                    {children}
                </Box>
            </Box>
        </ChakraProvider >
    );
};