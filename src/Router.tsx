import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/Homepage";
import { DefaultLayout } from "./Layout/DefaultLayout";

export function Router(){
    return (
        <Routes>
            <Route path={"/"} element={<DefaultLayout/>}>
                <Route path={"/"} element={<HomePage/>} />
            </Route>
        </Routes>
    )
    
}