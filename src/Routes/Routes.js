import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
import InternationalCategory from "../pages/Category/International/InternationalCategory";
import LocalCategory from "../pages/Category/Local/LocalCategory";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import InternationalBooking from "../pages/SharedPages/BookingStartPage/International/InternationalBooking";
import LocalBooking from "../pages/SharedPages/BookingStartPage/Local/LocalBooking";
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
        path: "/international/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/internationalCategory/${params.id}`),
        element: <InternationalCategory></InternationalCategory>,
      },
      {
        path: "/localPackage/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/localCategory/${params.id}`),
        element: <LocalCategory></LocalCategory>,
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
          fetch(`http://localhost:5000/international-place/${params.id}`),
        element: (
          <PrivateRoute>
            <InternationalBooking></InternationalBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/local/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/local-place/${params.id}`),
        element: (
          <PrivateRoute>
            <LocalBooking></LocalBooking>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
