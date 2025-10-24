import React from "react";
import Layout from "./layouts/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/LogIN/Login.jsx";
import SignUp from "./Pages/SignUP/SignUp.jsx";
import Contacts from "./Pages/Contacts/Contacts.jsx";
import Error from "./Pages/Error/Error.jsx";
// import ServicesPage from "./Pages/Services/ServicesPage.jsx";
import ServicePage from "./pages/service.jsx";
import BookServicePage from "./pages/BookService.jsx";
const Routes = [
  {
    Path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      // {
      //   path: "/services",
      //   element: <ServicePage />,
      // },
      // {
      //   path: "/services",
      //   element: <ServicesPage />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        // path: "/book-service",
        path: "/services",
        element: <BookServicePage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default Routes;
