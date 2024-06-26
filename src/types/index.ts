export interface ProductProps {
    products: Product[]
    count: number
}

export interface Product {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: number
    amount?: number;
    createdAt: string
    updatedAt: string
}
