// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Row } from "../../components/ui";
import { Card } from "../../components/ui/card";
import useFindProducts from "./hooks/useFindProduct";
import { useContext, useEffect, useRef, useState } from "react";
import { CardProducts } from "./components/cardProduct";
import { Title } from "./components/cardProduct/title";
import { SidebarContext } from "../../contexts/sideBarContext";
import { Content } from "./components/content";

const widthCard = 240
const heightCard = 285

export default function Home() {

    const [pagination, setPagination] = useState<{ page: number; rows: number; rowsInit: number }>({ page: 1, rows: 6, rowsInit: 6 })
    const { data, isLoading } = useFindProducts(pagination)

    const refDiv = useRef<any>()

    useEffect(() => {
        const cardPerRow = Math.floor(refDiv.current?.offsetWidth / widthCard);
        const rows = Math.round(refDiv.current?.offsetHeight / heightCard) + 1;
        const rowsInit = (rows * cardPerRow) < 5 ? 5 : (rows * cardPerRow)
        setPagination({ page: 1, rowsInit, rows: rowsInit })
    }, [])

    const { handleAppend } = useContext(SidebarContext)

    return (
        <div ref={refDiv} style={{ width: "100%", background: "red", minHeight: "100%", height: "100%", marginBottom: 24 }}>
            {isLoading ? (

                <>
                    Carregando...
                </>
            ) : (

                <Row gap center>
                    {pagination.rows}
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
        </div>
    )
}