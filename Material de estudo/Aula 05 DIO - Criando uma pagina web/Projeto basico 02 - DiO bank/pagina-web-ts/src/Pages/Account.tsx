import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import CardInfo from "../Components/CardInfo";
import { useEffect, useState, useContext } from "react";
import { api } from "../Api";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Components/AppContext";

interface IUserData {
    email: string,
    password: string,
    name: string,
    balance: number
    id: string
};

const Account = () => {
    const context = useContext(AppContext);
    const [userData, setUserData] = useState<null | IUserData>();
    const { id } = useParams();
    const navigate = useNavigate();
    const actualDate = new Date();
    useEffect(() => {
        const dados = async () => {
            const data: any | IUserData = await api;
            setUserData(data);
        };
        dados();
    }, []);
    if (userData && id !== userData.id) {
        navigate("/");
    };
    return (
        <Center backgroundColor="orange">
            <SimpleGrid columns={2} spacing="15px" padding="16px">
                {userData ?
                    (<>
                        <CardInfo title={`Welcome, ${userData.name}.`}
                            content={`
                            ${actualDate.getDate()}/${actualDate.getMonth() + 1}/${actualDate.getFullYear()}
                            ${actualDate.getHours()}:${actualDate.getMinutes()}
                            `} />
                        <CardInfo title="Saldo:" content={`R$${userData.balance.toFixed(2)}`} />
                    </>) :
                    (
                        <Spinner size="xl" speed="0.64s" color="white" emptyColor="blue" thickness="4px" />
                    )
                }
            </SimpleGrid>
        </Center>
    );
};

export default Account;