import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
  import Admin from '../pages/Admin.tsx'
  import Home from '../pages/Home.tsx'
  import LogIn from '../pages/LogIn.tsx'
  import Products from '../pages/Products.tsx'
  import Register from '../pages/Register.tsx'
const router = createBrowserRouter([
  {
      path: "/",
      element:  <Home/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/admin",
    element: <Admin/> ,
  },
  {
    path: "/login",
    element: <LogIn/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);


const Router = () => <RouterProvider router={router} />

export default Router