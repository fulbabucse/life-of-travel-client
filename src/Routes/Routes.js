import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import BookingStartPage from "../pages/SharedPages/BookingStartPage/BookingStartPage";
import Login from "../pages/UserActivities/Login/Login";
import Register from "../pages/UserActivities/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      { path: "about", element: <About></About> },
      { path: "contact", element: <Contact></Contact> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      { path: "blog", element: <Blog></Blog> },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: <Category></Category>,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/place/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tour_place/${params.id}`),
        element: (
          <PrivateRoute>
            <BookingStartPage></BookingStartPage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
