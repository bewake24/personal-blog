import { createBrowserRouter } from "react-router-dom";
import { Protected } from "./components";
import App from "./App";
import { Home, Signup, Login, AllPost, AddPost, EditPost, Post } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <h1>Error encoutnered</h1>,
      },
      {
        path: "/login",
        element: (
          <Protected authentication={false}>
            <Login />
          </Protected>
        ),
        errorElement: <h1>Error encoutnered</h1>,
      },
      {
        path: "/signup",
        element: (
          <Protected authentication={false}>
            <Signup />
          </Protected>
        ),
        errorElement: <h1>Error encoutnered</h1>,
      },
      {
        path: "/all-posts",
        element: (
          <Protected authentication>
            <AllPost />
          </Protected>
        ),
        errorElement: <h1>Error encoutnered</h1>,
      },
      {
        path: "/add-post",
        element: (
          <Protected authentication>
            <AddPost />
          </Protected>
        ),
        errorElement: <h1>Error encoutnered</h1>,
      },
      {
        path: "/post/:slug",
        element: (
          <Protected authentication>
            <Post />
          </Protected>
        ),
        errorElement: <h1>Error encoutnered</h1>,
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Protected authentication>
            <EditPost />
          </Protected>
        ),
        errorElement: <h1>Error encoutnered</h1>,
      },
    ],
  },
]);

export default router;
