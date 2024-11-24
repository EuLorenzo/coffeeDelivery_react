import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout/DefaultLayout";
import { HomePage } from "./Pages/Homepage";

export function Router(){
    return (
        <Routes>
            <Route path={"/"} element={<DefaultLayout/>}>
                <Route path={"/"} element={<HomePage/>} />
            </Route>
        </Routes>
    )
    
}