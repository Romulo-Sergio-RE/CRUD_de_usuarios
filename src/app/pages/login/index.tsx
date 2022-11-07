import { useState } from "react"
import { useApi } from "../../hooks/api";
import { ContainerLoginPage } from "./styled"

export const LoginPage = () =>{
    const[email, setEmail] = useState<any>([]);
    const[password, setPassword] = useState<any>([]);
    const[isLodding, setIsLodding] = useState(false);

    const teste = useApi()

    const enviarDatdo = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        const reponse = await teste.signIn("sergio@gmail.com","123456789")
        //reponse.map((a:any) => a.userData)
        console.log(reponse)
    }
    
    return(
        <ContainerLoginPage>
            <form onSubmit={enviarDatdo}>
                <div>
                    <label>Email:</label>
                    <input
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type={"text"}
                        placeholder={"digite seu Email"}
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type={"text"}
                        placeholder={"digite seu Password"}
                    />
                </div>
                <button>Envair</button>
            </form>
        </ContainerLoginPage>
    )
}
