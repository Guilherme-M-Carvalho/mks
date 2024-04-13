import { useState } from "react";
import { ProductProps } from "../../../types";

export default function useProducts(){

    const [products, setProducts] = useState<ProductProps>({ count: 0, products: []})

    const handleSetAllProoducts = (props: ProductProps) => {
        setProducts({...props})
    }

    return {
        products,
        handleSetAllProoducts
    }

}