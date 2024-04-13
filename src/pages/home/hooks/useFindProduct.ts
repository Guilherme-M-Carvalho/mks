import { useQuery } from "react-query"
import { api } from "../../../services/api"
import { AxiosPromise } from "axios";
import { ProductProps } from "../../../types";

export default function useFindProducts({ orderBy = "DESC", sortBy = "id", page, rows }: { page: number; rows: number; sortBy?: string; orderBy?: string; }) {

    const handleFind = async (): Promise<ProductProps> => {
        const res = await api<ProductProps>({
            method: "get", url: "/products", params: {
                orderBy,
                sortBy,
                page,
                rows
            }
        })
        return res.data
    }

    const query = useQuery({
        queryFn: handleFind,
        queryKey: "find-products",
        enabled: !!page && !!rows,
    })

    return {
        ...query,
        data: query.data
    }
}