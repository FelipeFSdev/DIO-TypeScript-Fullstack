import { Card, CardBody, Image, Stack, Heading, Text, ChakraProvider, Box } from "@chakra-ui/react";

export const Body = () => {
    return (
        <ChakraProvider>
            <Box display="flex">
                <Card maxW='md' maxHeight="480px" marginLeft="150px">
                    <CardBody>
                        <Image
                            src="https://laboratorio.medicilab.com.br/imagens/exames-veterinarios-exame-veterinario.jpg"
                            alt="A woman examing a dog"
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'> Exams </Heading>
                            <Text>
                                Schedule your pet exams. Here at Alpha, the results get ready
                                instantly.
                                If your pet is happy, you (and us) are happy.
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' maxHeight="480px" marginLeft="115px">
                    <CardBody>
                        <Image
                            src="https://estimma.com/wp-content/webp-express/webp-images/uploads/2022/05/hospital-veterinario-campinas-farmacia-veterinaria.jpg.webp"
                            alt="Wall with some medicines"
                            borderRadius='md'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'> Pharmacy </Heading>
                            <Text>
                                We have a pharmacy store integrated into our spacework.
                                Exams' done? Need a medicine? With a recipe you could buy with us
                                what your pet needs.
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card maxW='md' maxHeight="480px" marginLeft="115px">
                    <CardBody>
                        <Image
                            src="https://i0.wp.com/petlandbrasil.com.br/wp-content/uploads/2023/02/Banho-e-tosa-perto-de-mim.png?fit=1280%2C720&ssl=1"
                            alt="Dog taking a shower"
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Wash and grooming</Heading>
                            <Text>
                                Alguma coisa só que no body do ultimo card
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </ChakraProvider>


    )
}
