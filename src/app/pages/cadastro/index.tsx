import { useContext } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../context/User/UserContext"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type FormData = {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}
const schema = yup.object({
    name: yup.string().required("O nome e obrigatorio").max(10,"o nome deve ter no maximo 10 digitos").min(4, "o nomedeve ter no minimo 4 digitos"),
    email: yup.string().email("digite um email valido").required("O email e obrigatorio"),
    password: yup.string().required("O senha e obrigatorio").min(6,"a senha deve ter pelo menos 6 digitos"),
    confirmPassword: yup.string().required("confirmar senha e obrigatorio").min(6).oneOf([yup.ref("password")], "as senhas devem ser iguais"),
}).required();
  
export const CadastroPage = () =>{
    const {registerUser} = useContext(UserContext);
    
    const {register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const clickRegister = (dataUser: FormData) =>{
        registerUser(
            dataUser.name, 
            dataUser.email, 
            dataUser.password
        )
    }

    return(
        <form onSubmit={handleSubmit(clickRegister)}>
            <label>Name:</label>
            <input 
                type="text" 
                placeholder="name"
                {...register("name")}
            />
            <span>{errors.name?.message}</span>
            <label>Email:</label>
            <input 
                type="email" 
                placeholder="email" 
                {...register("email")}
            />
            <span>{errors.email?.message}</span>
            <label>Senha:</label>
            <input 
                type="password" 
                placeholder='password' 
                {...register("password")}
            />
            <span>{errors.password?.message}</span>
            <label>Confirmar Senha:</label>
            <input 
                type="password" 
                placeholder='password' 
                {...register("confirmPassword")}
            />
            <span>{errors.confirmPassword?.message}</span>
            <button type="submit">REGISTER</button>
        </form>
    )
}