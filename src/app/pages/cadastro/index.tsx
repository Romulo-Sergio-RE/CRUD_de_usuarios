import { FormEvent, useContext, useState } from "react"
import { UserContext } from "../../context/User/UserContext"

export const CadastroPage = () =>{

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const{register}=useContext(UserContext)

    const clickRegister = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        register(name,email,password)
        setName("")
        setEmail("")
        setPassword("")
    }

    return(
        <form onSubmit={(event) => clickRegister(event)}>
            <label>Name:</label>
            <input 
                type="text" 
                placeholder="name"
                value={name}
                onChange={(e)=> setName(e.target.value)} 
            />
            <label>Email:</label>
            <input 
                type="email" 
                placeholder="email" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
            />
            <label>Senha:</label>
            <input 
                type="password" 
                placeholder='password' 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
            />
            <button type="submit">REGISTER</button>
        </form>
    )
}