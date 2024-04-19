import { useContext } from "react";
import { Sidebar } from "../../components/sidebar";
import { SidebarContext } from "../../contexts/sideBarContext";
import { Card } from "../../components/ui/card";
import { ButtonClose } from "../../components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { CardProducts } from "../../pages/home/components/cardProduct";
import { ButtonControlAmount } from "../../components/ui/buttonsControlAmount";
import { motion } from "framer-motion";

export default function SidebarTemplate() {

    const { product, handleAdd, handleMinus, handleRemove, visibleAside, toggleAside } = useContext(SidebarContext)
    const total = product.reduce((acc, val) => acc + (Number(val.amount) * val.price), 0)
    const formatPrice = (price: number) => new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price)

    return (
        <motion.div id="drawer" onClick={(e: any) => {
            if (e.target?.id == "drawer") {
                toggleAside()
            }
        }} style={{
            zIndex: -1000
        }} variants={{
            show: {
                backgroundColor: "rgba(255, 255, 255, .2)",
                width: "100vw",
                height: "100vh",
                position: "absolute",
                backdropFilter: "blur(1px)",
                opacity: 1,
                zIndex: 0
            },
            hide: {
                right: 0,
                backgroundColor: "rgba(255, 255, 255, .2)",
                width: "100vw",
                height: "100vh",
                position: "absolute",
                backdropFilter: "blur(1px)",
                opacity: 0,
                transition: {
                    ease: "easeInOut",
                    duration: 0.4
                },
                transitionEnd: {
                    zIndex: -1
                }
            }
        }} animate={visibleAside ? "show" : "hide"} >
            <Sidebar.Root>
                <Sidebar.RootContent animate={visibleAside ? "show" : "hide"} initial="hide" variants={{
                    show: {
                        width: "100%",
                    },
                    hide: {
                        width: 0
                    }
                }} >
                    <Sidebar.RowHeader>
                        <Sidebar.Title>
                            Carrinho de compras
                        </Sidebar.Title>
                        <ButtonClose medium onClick={toggleAside}>
                            <FontAwesomeIcon icon={faClose} />
                        </ButtonClose>
                    </Sidebar.RowHeader>
                    <Sidebar.Body>
                        {product.map((prod, index) => (
                            <Card widthMax noOverflow fitContent key={index}>

                                <Sidebar.ContentProduct style={{ width: "100%" }}>
                                    <Sidebar.Image src={prod.photo} />
                                    <Sidebar.ContentTitleCard>
                                        <CardProducts.Title>
                                            {prod.name}
                                        </CardProducts.Title>
                                    </Sidebar.ContentTitleCard>
                                    <ButtonControlAmount.Root>
                                        <ButtonControlAmount.ContentActions borderRight action onClick={() => handleMinus({ index })}>
                                            <FontAwesomeIcon size="xs" icon={faMinus} />
                                        </ButtonControlAmount.ContentActions>
                                        <ButtonControlAmount.ContentActions borderRight widthMax>
                                            {prod?.amount ? prod?.amount : 0}
                                        </ButtonControlAmount.ContentActions>
                                        <ButtonControlAmount.ContentActions action onClick={() => handleAdd({ index })}>
                                            <FontAwesomeIcon size="xs" icon={faPlus} />
                                        </ButtonControlAmount.ContentActions>
                                    </ButtonControlAmount.Root>
                                    <Sidebar.PriceUnit>
                                        {formatPrice(Number(prod.price) * Number(prod.amount))}
                                    </Sidebar.PriceUnit>
                                    <Sidebar.ContentClose>
                                        <ButtonClose blackColor onClick={() => handleRemove({ index })}>
                                            <FontAwesomeIcon icon={faClose} />
                                        </ButtonClose>
                                    </Sidebar.ContentClose>
                                </Sidebar.ContentProduct>
                            </Card>
                        ))}
                    </Sidebar.Body>
                    <Sidebar.Total>
                        <Sidebar.SpanTotal>
                            Total:
                        </Sidebar.SpanTotal>
                        <Sidebar.SpanTotal>
                            {formatPrice(total)}
                        </Sidebar.SpanTotal>
                    </Sidebar.Total>
                    <Sidebar.ButtonFinish>Finalizar Compra</Sidebar.ButtonFinish>
                </Sidebar.RootContent>
            </Sidebar.Root>
        </motion.div>

    )
}