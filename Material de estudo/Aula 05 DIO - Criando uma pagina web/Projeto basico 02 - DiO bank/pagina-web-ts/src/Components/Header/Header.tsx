import { Box, Center, ChakraProvider, Image, Text } from '@chakra-ui/react'
export const Header = () => {
    return (
        <ChakraProvider>
            <Box backgroundColor="#9413dc"
                margin="-5px 0px -15px">
                <Box backgroundColor="#ff8080"
                    margin="5px 750px 15px 750px"
                    borderRadius="15px">
                    <Center>
                        <Image
                            src="https://lp.dio.me/wp-content/uploads/2023/03/LOGO-DIO-COLOR.png"
                            alt="Logo DiO."
                            boxSize="80%"
                            padding="5px"
                        />
                    </Center>
                    <Center>
                        <Text
                            fontSize="4xl"
                            fontFamily="sans-serif"> Bank </Text>
                    </Center>
                </Box>
            </Box>

        </ChakraProvider>
    )
}