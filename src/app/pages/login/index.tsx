import { FormEvent, useContext, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../context/User/UserContext"
import { Loddgin } from "../lodding"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

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
        <div>
            {isLodding ?
                <Loddgin />
                :
                null
            }
            <form onSubmit={handleSubmit(clickSignIn)}>
                <label>Email:</label>
                <input 
                    type="text"
                    {...register("email")}
                />
                <span>{errors.email?.message}</span>

                <label>Senha:</label>
                <input 
                    type="text" 
                    {...register("password")}
                />
                <span>{errors.password?.message}</span>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}
