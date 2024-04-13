// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Row } from "../../components/ui";
import { Card } from "../../components/ui/card";
import useProducts from "./hooks/useProduct";
import useFindProducts from "./hooks/useFindProduct";
import { useContext, useState } from "react";
import { CardProducts } from "./components/cardProduct";
import { Title } from "./components/cardProduct/title";
import { SidebarContext } from "../../contexts/sideBarContext";

export default function Home() {

    const { data, isLoading } = useFindProducts({ page: 1, rows: 6 })

    console.log(data);

    const [teste, setTeste] = useState<boolean>(false)

    const { products } = useProducts()

    const { handleAppend } = useContext(SidebarContext)

    return (<>
        {isLoading ? (

            <>
                Carregando...
            </>
        ) : (

            <Row gap={true}>
                {data?.products.map((product, index) => (
                    <CardProducts.Root key={index}>
                        <CardProducts.RowImage>
                            <CardProducts.Image src={product.photo} />
                        </CardProducts.RowImage>
                        <CardProducts.Row gap>
                            <Title>{product.name}</Title>
                            <CardProducts.Chip>{new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(product.price)}</CardProducts.Chip>
                        </CardProducts.Row>
                        <CardProducts.Row>
                            <CardProducts.SubTitle>{product.description}</CardProducts.SubTitle>
                        </CardProducts.Row>
                        <CardProducts.ButtonPurchase onClick={() => handleAppend(product)}>
                            <FontAwesomeIcon icon={faCartShopping} />
                            COMPRAR
                        </CardProducts.ButtonPurchase>
                    </CardProducts.Root>
                ))}
            </Row>

        )}
    </>)
}