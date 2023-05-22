import { api } from "../API";

export const FinanceAPI = {
    getTransaction:async (id: string) => {
        const response = await api.request({
            url: "/Finance/GetTransaction",
            data:{Id:id},
        })

        return response.data.data;
        
    },

    getAllTransaction:async () => {
        const response = await api.request({
            url: "/Finance/GetTransactions"
        })
        return response.data.data;
    },

    getTransactionType:async (id: number) => {
        const response = await api.request({
            url: "/Finance/GetTransaction",
            data:{Id:id},
        })

        return response.data.data;
        
    },

    getAllTransactionType:async (id: number) => {
        const response = await api.request({
            url: "/Finance/GetTransactions",
            data:{Id:id},
        })
        return response.data.data;
    }

    
}