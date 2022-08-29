import { createContext } from "react"
import { User } from "../../types/User"

export type UserContextTypo ={
    users: User []| null,
    signIn:(email: string, password:string) => Promise<boolean>
    register:(name: string, email: string, password:string) => Promise<boolean>
}
export const UserContext = createContext<UserContextTypo>(null!)