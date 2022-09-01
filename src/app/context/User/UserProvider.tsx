import { useState } from "react"
import { useApi } from "../../hooks/api"
import { User } from "../../types/User"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}: any) =>{

    const[users, setUsers] = useState<User []| null>(null);
    const api = useApi();

    const signIn = async (email:string, password:string)=>{
        const data = await api.signIn(email, password)
        if(data){
            setUsers(data)
            return true
        }
        return false
    }

    const registerUser = async (name:string, email:string, password:string)=>{
        const data = await api.registerUser(name, email, password)
        if(data.users){
            return true
        }
        return false
    }
    
    return(
        <UserContext.Provider value={{users,registerUser, signIn}}>
            { children }
        </UserContext.Provider>
    )
}