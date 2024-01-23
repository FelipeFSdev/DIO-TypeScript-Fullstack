import { ChakraProvider } from "@chakra-ui/react"
import { Header } from "./Header/Header"

export const Layout = () => {
    return (
        <ChakraProvider>
            <Header />
        </ChakraProvider>
    )
}