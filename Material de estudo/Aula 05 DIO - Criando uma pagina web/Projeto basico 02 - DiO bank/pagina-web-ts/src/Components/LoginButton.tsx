import { Button, ChakraProvider } from "@chakra-ui/react"
import { submit } from "../Services/submit"

export const Login = () => {
    return (
        <ChakraProvider>
            <Button
                colorScheme='blue'
                size='sm' marginTop='5px'
                type="submit"
                onClick={submit}>
                Login
            </Button>

        </ChakraProvider>
    )
}