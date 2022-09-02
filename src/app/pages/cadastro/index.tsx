import { useContext } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../context/User/UserContext"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ContainerLoginPage } from "./styleCadastro";

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
        <ContainerLoginPage>
            <div className="ContainerFormRegisterPage">
                <form onSubmit={handleSubmit(clickRegister)} className="formularioRegisterPage">
                    <label className="labelRegisterPage">Name:
                        <input 
                            className="inputRegisterPage"
                            type="text" 
                            placeholder="name"
                            {...register("name")}
                        />
                        <span className="spanRegisterPage">{errors.name?.message}</span>
                    </label>

                    <label className="labelRegisterPage">Email:
                        <input 
                            className="inputRegisterPage"
                            type="email" 
                            placeholder="email" 
                            {...register("email")}
                        />
                        <span className="spanRegisterPage">{errors.email?.message}</span>
                    </label>
                    <label className="labelRegisterPage">Senha:
                        <input 
                            className="inputRegisterPage"
                            type="password" 
                            placeholder='password' 
                            {...register("password")}
                        />
                        <span className="spanRegisterPage">{errors.password?.message}</span>
                    </label>
                    <label className="labelRegisterPage">Confirmar Senha:
                        <input 
                            className="inputRegisterPage"
                            type="password" 
                            placeholder='password' 
                            {...register("confirmPassword")}
                        />
                        <span className="spanRegisterPage">{errors.confirmPassword?.message}</span>
                    </label>
                    <button className="buttonRegisterPage" type="submit">REGISTER</button>
                </form>
            </div>
        </ContainerLoginPage>
    )
}