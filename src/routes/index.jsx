import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from './sections/error-page'
import { Root, Login, Register, Blog, BlogCreate, BlogUpdate, BlogDetails } from "./sections";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/blog",
        element: <Blog />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "create",
                element: <BlogCreate />,
                errorElement: <ErrorPage />,
            },
            {
                path: ":id/edit",
                element: <BlogUpdate />,
                errorElement: <ErrorPage />,
            },
            {
                path: ":id/details",
                element: <BlogDetails />,
                errorElement: <ErrorPage />,
            },
        ]
    },
    {
        path: "/auth",
        children: [
            {
                path: "login",
                element: <Login />,
                errorElement: <ErrorPage />,
            },
            {
                path: "register",
                element: <Register />,
                errorElement: <ErrorPage />,
            },
        ]
    },
    {
        path: "/error",
        element: <ErrorPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default router;