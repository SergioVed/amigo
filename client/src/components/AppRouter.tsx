import { Navigate, Route, Routes } from "react-router-dom"
import { authRoutes } from "../routes";
import { publicRoutes } from "../routes";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ADMIN_FULL_PATHS, PATHS } from "../utils/paths";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { checkAuthAction } from "../modules/auth/store/actions";

export const AppRouter = () => {

    const {isAuth, authChecked} = useTypedSelector(state => state.login);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(checkAuthAction())
    }, [dispatch])

    // Avoid redirecting while the persisted session is still being restored.
    // Otherwise a refresh on an admin route briefly looks unauthenticated and
    // the wildcard route sends the user through /login to /admin/teachers.
    if (!authChecked) {
        return null
    }

    return (
        <Routes>
            {isAuth ? authRoutes.map(route => (
                <Route key={route.path} path={route.path} Component={route.Component}>
                    {route.children.map(child => (
                        <Route 
                            key={child.path}
                            path={child.path}
                            Component={child.Component}
                        />
                    ))}
                </Route>
            )) 
            : publicRoutes.map(route => (
                <Route key={route.path} path={route.path} Component={route.Component}/>
            ))}
            <Route path="*" element={<Navigate to={isAuth ? ADMIN_FULL_PATHS.teachers : PATHS.login} replace/>}/>
        </Routes>
    )
}
