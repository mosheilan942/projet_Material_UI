import React from 'react'
import * as ReactDOM from "react-dom/client";
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.tsx";
import NavigationMenu from './components/NavigationMenu.tsx';
import Foo from "./components/Foo.tsx";
import Project from './components/Project.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: "NavigationMenu",
      element: <NavigationMenu />,
      errorElement: <ErrorPage />,
      children: [{
        path: "/NavigationMenu/:name",
        element: <Project/>,
        errorElement: <ErrorPage />
      }
      ]
    }
    ]
  }]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
