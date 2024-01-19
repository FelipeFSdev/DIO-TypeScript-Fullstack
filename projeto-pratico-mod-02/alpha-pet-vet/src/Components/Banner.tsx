import { Card, CardBody, ChakraProvider, Image } from "@chakra-ui/react"

export const Banner = () => {
    return (
        <ChakraProvider>
            <Card>
                <CardBody
                    minHeight="350px"
                    maxHeight="350px"
                    backgroundColor="#9966ff"
                    display="flex">
                    <Image
                        src="https://lh5.googleusercontent.com/p/AF1QipOwuD0uc245uSBk5hmsYhV6ANm4PvBdsnW_jk8v=w408-h408-k-no"
                        alt="contact info"
                        width="300px"
                        marginLeft="125px"
                    />
                    <Image
                        src="https://lh5.googleusercontent.com/p/AF1QipNXBaMoyPja9CFowtefQmPGBIx_LqLNPNAkAQXH=w231-h289-n-k-no-nu"
                        alt="pet ambient"
                        width="300px"
                        marginLeft="20px"
                    />
                    <Image
                        src="https://lh3.googleusercontent.com/p/AF1QipP-B9FYPsOye0gHTf-KfiDzvBMBRMK-Wlwv2fGo=s3758-w3758-h1878-rw"
                        alt="equipments"
                        width="300px"
                        marginLeft="20px"
                    />
                    <Image
                        src="https://www.bichoquerido.com.br/wp-content/uploads/2022/05/petshop-bicho-querido-03.jpg"
                        alt="pet food"
                        width="300px"
                        marginLeft="20px"
                    />
                    <Image
                        src="https://estimma.com/wp-content/webp-express/webp-images/uploads/2022/05/hospital-veterinario-campinas-farmacia-veterinaria.jpg.webp"
                        alt="pharmacy"
                        width="300px"
                        marginLeft="20px"
                    />
                </CardBody>
            </Card>
        </ChakraProvider >
    )
}