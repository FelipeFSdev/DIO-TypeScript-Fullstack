import { Box, Button, ChakraProvider, Image } from "@chakra-ui/react"

export const Header = () => {
    return (
        <ChakraProvider>
            <Box backgroundColor="#00dbdb" minHeight="90px" maxHeight="90px" display="flex">
                <Box>
                    <Image
                        src="https://i.pinimg.com/originals/ed/5f/3a/ed5f3a15d92ba3ac6238a98da42bb01e.jpg"
                        alt="logo marca"
                        boxSize="90px" />
                </Box>
                <Box position="absolute" top="50px" left="50%" transform="translate(-50%, -50%)">
                    <Button colorScheme="teal" mr="2"> Serviços </Button>
                    <Button colorScheme="teal" mr="2"> Estrutura </Button>
                    <Button colorScheme="teal" mr="2"> Equipe </Button>
                    <Button colorScheme="teal" mr="2"> Sobre nós </Button>
                    <Button colorScheme="teal" mr="2"> Contato </Button>
                    <Button colorScheme="teal" mr="2"> Feedbacks </Button>
                </Box>
            </Box>
        </ChakraProvider>
    )
}
