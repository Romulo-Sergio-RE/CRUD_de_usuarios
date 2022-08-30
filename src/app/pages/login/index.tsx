import { FormEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/User/UserContext"

export const LoginPage = () =>{
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const{signIn, users} = useContext(UserContext)

    const navigate = useNavigate()

    async function clickSignIn (event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        let test = await signIn(email, password)
        if(test){
            console.log("users")
            navigate("/Home")
        }
        console.log(users)
        setEmail("")
        setPassword("") 
    }
    return(
        <div>
            <form onSubmit={(event) => clickSignIn(event)}>
                <label>Email:</label>
                <input 
                    type="text"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)} 
                />

                <label>Senha:</label>
                <input 
                    type="text" 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} 
                />

                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}
