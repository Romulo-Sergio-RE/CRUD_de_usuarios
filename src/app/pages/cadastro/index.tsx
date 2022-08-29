import { FormEvent, useState } from "react"

export const CadastroPage = () =>{

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const register = (event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        console.log(name)
        console.log(email)
        console.log(password)
    }

    return(
        <form onSubmit={(event) => register(event)}>
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