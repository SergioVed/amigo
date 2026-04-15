import { Admin } from "./pages/admin/admin"
import { Login } from "./pages/public/login"
import { ADMIN_ROUTE, LOGIN_ROUTE } from "./utils/consts"

interface Route {
    path: string,
    Component: any
}

export const authRoutes: Route[] = [
    {
        path: ADMIN_ROUTE, 
        Component: Admin
    }
]

export const publicRoutes: Route[] = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]