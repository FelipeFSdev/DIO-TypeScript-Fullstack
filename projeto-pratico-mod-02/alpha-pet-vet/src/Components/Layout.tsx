import { Box, ChakraProvider } from "@chakra-ui/react";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { Body } from "./Body";


export const Layout = () => {
    return (
        <ChakraProvider>
            <Box minHeight="100vh" backgroundColor="#9966ff">
                <Header />
                <Banner />
                <Body />
            </Box>
        </ChakraProvider>
    )
}