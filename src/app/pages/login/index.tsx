import { FormEvent, useState } from "react"

export const LoginPage = () =>{

    const[email, setEmail] = useState("")
    const[senha, setSenha] = useState("")

    const signIn = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(email)
        console.log(senha)
    }
    return(
        <form onSubmit={(event) => signIn(event)}>
            <label>Email:</label>
            <input 
                type="text"
                value={email}
                onChange={(e)=> setEmail(e.target.value)} 
            />

            <label>Senha:</label>
            <input 
                type="text" 
                value={senha}
                onChange={(e)=> setSenha(e.target.value)} 
            />

            <button type="submit">LOGIN</button>
        </form>
    )
}