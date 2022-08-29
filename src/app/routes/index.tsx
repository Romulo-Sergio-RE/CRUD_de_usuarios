import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CadastroPage } from "../pages/cadastro";
import { HomePage } from "../pages/homePage";
import { LoginPage }  from "../pages/login";

export const Rotas = ({ children }: any) => {
    return(
        <BrowserRouter>
            { children }
            <Routes>
                <Route path="/" element={<LoginPage />}/>
                <Route path="/register" element={<CadastroPage />}/>
                <Route path="/Home" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    );
};