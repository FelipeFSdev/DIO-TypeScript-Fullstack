import { Box, Text } from "@chakra-ui/react";

interface ICardInfo {
    title: string,
    content: string
}

const CardInfo = ({ title, content }: ICardInfo) => {
    return (
        <Box backgroundColor="white"
            width="320px"
            minHeight="150px"
            padding={8}
            borderRadius="10px">
            <Text fontSize="2xl" fontWeight="bold">
                {title}
            </Text>
            <Text fontSize="xl">
                {content}
            </Text>
        </Box>
    );
}

export default CardInfo;