import api from "../services/api";

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
    registerUser: async (name:string, email:string, password:string)=>{
        const token = Math.random().toString(16).substr(2)
        const response = await api.post("/users",{
            "token":token,
            "userData":{
                "name":name,
                "email":email, 
                "password":password,
            }
        })
        return response.data
    }
})