import { BrowserRouter, Route, Routes as Switch, } from "react-router-dom";
import { HomePage, Login,  } from "../pages";

export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Home" element={<HomePage />}/>
                <Route path="/" element={<Login />}/>
            </Switch>
        </BrowserRouter>
    );
};