import React from 'react';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/LogIN/Login.jsx';
import SignUp from './Pages/SignUP/SignUp.jsx';
import Contacts from './Pages/Contacts/Contacts.jsx';
import Error from './Pages/Error/Error.jsx';
import ServicesPage from './Pages/Services/ServicesPage.jsx';
const Routes=[
    {
        Path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/services",
                element:<ServicesPage/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            },
            {
                path:"/contacts",
                element:<Contacts/>
            }
        ]
    },
    {
        path:"*",
        element:<Error/>
    }
]

export default Routes;