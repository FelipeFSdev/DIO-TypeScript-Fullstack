import { Box, Center, ChakraProvider, Input, Text } from "@chakra-ui/react"
import { Header } from "./Header/Header"
import { Login } from "./Login"
import { useEffect, useState } from "react"
import { api } from "../API"

interface UserData {
    email: string,
    password: string,
    name: string
};

export const Card = () => {
    const [email, setEmail] = useState("");
    const [userData, setUserData] = useState<null | UserData>();
    useEffect(() => {
        const dados = async () => {
            const data: any | UserData = await api;
            setUserData(data);
        };
        dados();
    }, []);
    return (
        <ChakraProvider>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px' margin="0px">
                <Header />
                <Box backgroundColor='white' borderRadius='10px' padding='15px'>
                    <Center>
                        {(userData === null || userData === undefined) && <p>Loading...</p>}
                        <Text
                            fontSize="2xl"
                            fontWeight="600"
                            paddingBottom="15px">
                            Realize login antes de continuar
                        </Text>
                    </Center>

                    <form>
                        <Input
                            type='email' placeholder='email'
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }} />
                        <Input type='password' placeholder='senha' />
                        <Login />
                    </form>
                </Box>
            </Box>
        </ChakraProvider >
    )
}