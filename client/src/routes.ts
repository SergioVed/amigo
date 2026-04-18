import { AdminLayout } from "./layouts/adminLayout"
import { CeoPage } from "./pages/admin/ceoPage"
import { FeedbackPage } from "./pages/admin/feedbackPage"
import { PricePage } from "./pages/admin/pricePage"
import { TeacherPage } from "./pages/admin/teacherPage"
import { LoginPage } from "./pages/public/loginPage/login"
import { ADMIN_PATHS, PATHS } from "./utils/paths"

interface Route {
    path: string,
    Component: any
}

export const authRoutes = [
    {
        path: PATHS.admin,
        Component: AdminLayout,
        children: [
            { path: ADMIN_PATHS.teachers, Component: TeacherPage },
            { path: ADMIN_PATHS.feedback, Component: FeedbackPage },
            { path: ADMIN_PATHS.price, Component: PricePage },
            { path: ADMIN_PATHS.ceo, Component: CeoPage },
        ]
    }
]

export const publicRoutes: Route[] = [
    { path: PATHS.login, Component: LoginPage }
]