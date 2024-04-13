import { createContext, ReactNode, useState } from "react";
import { Product } from "../types";

export const SidebarContext = createContext({} as {
    amount: number;
    product: Product[],
    handleAdd: ({ index }: {
        index: number;
    }) => void
    handleMinus: ({ index }: {
        index: number;
    }) => void
    handleAppend: (prod: Product) => void
})

export default function SidebarProvider({children}: { children: ReactNode}) {

    const [product, setProduct] = useState<Product[]>([])

    const amount = product.reduce((acc, val) => acc + Number(val.amount), 0)

    const handleAdd = ({ index }: { index: number }) => {
        setProduct(arr => {
            let amount = arr[index].amount
            if (amount == undefined) amount = 0
            amount += 1
            arr[index].amount = amount
            return [...arr]
        })
    }

    const handleMinus = ({ index }: { index: number }) => {
        setProduct(arr => {
            let amount = arr[index].amount
            if (amount == undefined) amount = 0
            if(amount > 1){
                amount -= 1
                arr[index].amount = amount
            } else {
                arr.splice(index, 1)
            }
            return [...arr]
        })
    }

    const handleAppend =(prod: Product) => {
        setProduct(arr => {
            if(!arr.find(el => el.id == prod.id)){
                arr.push(prod)
            }
            return [...arr]
        })
    }

    return (<SidebarContext.Provider value={{ amount, product, handleAdd, handleMinus, handleAppend}}>
        {children}
    </SidebarContext.Provider>)
}