import { Navigate, replace, Route, Routes } from "react-router-dom"
import { authRoutes } from "../routes";
import { publicRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/consts";

export const AppRouter = () => {

    const isAuth = true;

    return (
        <Routes>
            {isAuth && authRoutes.map(route => (
                <Route key={route.path} path={route.path} Component={route.Component}/>
            ))}
            {publicRoutes.map(route => (
                <Route key={route.path} path={route.path} Component={route.Component}/>
            ))}
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace/>}/>
        </Routes>
    )
}