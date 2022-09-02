import { FormEvent, useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/User/UserContext"
import { Loddgin } from "../lodding"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ContainerLoginPage } from "./styleLogin"

type FormDataSignIn = {
    email: string,
    password: string,
}
const schema = yup.object({
    email: yup.string().email("digite um email valido").required("O email e obrigatorio"),
    password: yup.string().required("O senha e obrigatorio").min(6,"a senha deve ter pelo menos 6 digitos"),
}).required();
  
export const LoginPage = () =>{
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const{signIn, users} = useContext(UserContext);
    const[isLodding, setIsLodding] = useState(false);

    const {register, handleSubmit, formState: { errors } } = useForm<FormDataSignIn>({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            if(users?.find((a)=> a.email === email && a.password === password)){
                navigate("/Home");
            }else if(users?.map((a)=> a.email !== email && a.password !== password)){
                userNoValidate();
            }
        }, 2000);
        
        return () => clearTimeout(timeout);
    }, [isLodding]);

    const userNoValidate = ()=>{
        setIsLodding(false);
        setEmail("");
        setPassword("");
    }

    async function clickSignIn (dataUser: any) {
        await signIn(dataUser.email, dataUser.password);
        setEmail(dataUser.email);
        setPassword(dataUser.password);
        setIsLodding(true);
    }

    return(
        <ContainerLoginPage>
            {isLodding ?
                <Loddgin />
                :
                null
            }
            <div className="ContainerFormLoginPage">
                <form onSubmit={handleSubmit(clickSignIn)} className="formularioLoginPage">
                    <label className="labelLoginPage">Email:
                        <input 
                            className="inputLoginPage"
                            type="text"
                            placeholder="Digite seu email"
                            {...register("email")}
                        />
                        <span className="spanLoginPage">{errors.email?.message}</span>
                    </label>
                    <label className="labelLoginPage">Senha:
                        <input 
                            className="inputLoginPage"
                            type="text" 
                            placeholder="Digite sua senha"
                            {...register("password")}
                        />
                        <span className="spanLoginPage">{errors.password?.message}</span>
                    </label>
                    <button className="buttonLoginPage" type="submit">LOGIN</button>
                </form>
            </div>
        </ContainerLoginPage>
    )
}
