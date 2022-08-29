import { FormEvent, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/User/UserContext"

export const LoginPage = () =>{
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const{signIn, users} = useContext(UserContext)

    const navigate = useNavigate()

    const clickSignIn =  async (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        let signInUser = await signIn(email, password)
        if(signInUser){
            validadeEmailAndPassword()
        }
        setEmail("")
        setPassword("")
    }
    const validadeEmailAndPassword = ()=>{
        users?.map((a) => {
            if (a.email === email && a.password === password) {
                return navigate("/Home")
            }else{
                alert("seus dados estao errados")
            }
        })
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
