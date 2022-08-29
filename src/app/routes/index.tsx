import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage }  from "../pages/login/index";

export const Rotas = ({ children }: any) => {
    return(
        <BrowserRouter>
            { children }
            <Routes>
                <Route path="/" element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>
    );
};