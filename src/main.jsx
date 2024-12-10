import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Protected from "./components/AuthLayout.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import AllPost from "./pages/AllPost.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Post from "./pages/Post.jsx";

const router = createBrowserRouter([
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider>
  </StrictMode>
);
