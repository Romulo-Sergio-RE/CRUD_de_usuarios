import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3333"
})
export const useApi = ()=>({
    signIn: async (email:string, password:string)=>{
        const response = await api.get("/users",{
            params:{
                "email":email,
                "password":password
            }
        })
        return response
    },
    register: async (name:string, email:string, password:string)=>{
        const response = await api.post("/users",{
            "name":name,
            "email":email, 
            "password":password
        })
        return response.data
    }
})