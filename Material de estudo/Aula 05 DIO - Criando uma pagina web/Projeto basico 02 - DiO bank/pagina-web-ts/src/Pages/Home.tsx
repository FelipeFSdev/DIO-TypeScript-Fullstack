import { Center, Input, Text } from "@chakra-ui/react";
import { Card } from "../Components/Card"
import { useState } from "react";
import { Login } from "../Components/LoginButton";

const Home = () => {
    const [email, setEmail] = useState("");

    return (
        <Card>
            <Center>
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
        </Card>
    )
};

export default Home;