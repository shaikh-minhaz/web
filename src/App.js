import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Loginpage from './pages/Loginpage.js';
import Signuppage from './pages/Signuppage.js';
import Cartpage from './pages/Cartpage.js';
import Checkout from './pages/Checkout.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home> ),
  },

  {
    path: "/cart",
    element: (<Cartpage></Cartpage> ),
  },

  {
    path: "/checkout",
    element: (<Checkout></Checkout> ),
  },

  {
    path: "/login",
    element: (<Loginpage></Loginpage>),},

    {
      path: "/signup",
      element: (<Signuppage></Signuppage>),},
]);

function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
  
    </div>
  );
}

export default App;
