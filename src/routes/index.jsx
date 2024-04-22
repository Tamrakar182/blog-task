import {
    createBrowserRouter,
} from "react-router-dom";
import Root from './sections/Root'
import ErrorPage from './sections/error-page'
import Blog from "./sections/blog";
import LoginRoute from "./sections/login";

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
    },
    {
        path: "/login",
        element: <LoginRoute />,
        errorElement: <ErrorPage />,
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