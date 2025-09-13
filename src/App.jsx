import React, { useEffect, useState ,useRef} from 'react'
import { StudentData } from './components/StudentData';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/login",
      element:<><Navbar/> <Login/> </>
    },
    {
      path:"/about",
      element:<><Navbar/><About/></>
    }
  ]);
  return <RouterProvider router={router}/>
 
}

export default App
