import { createRoot } from 'react-dom/client'
import './index.css'
import { Component, StrictMode, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App'
import About from './components/About/About.jsx'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobile from './components/Mobile/Mobile.jsx'
import Laptop from './components/Laptop/Laptop.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'
import UserDet from './components/UserDet/UserDet.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

// const data =async ()=>{
//   return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
  
// }
const router = createBrowserRouter([
  {
    path: "main",
    element: <Root />,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "mobile", Component: Mobile },
      { path: 'laptop', Component: Laptop },
      {
        path: 'users',
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      // {
      //   path: 'users2',
      //   element: <Suspense>
      //     <Users2 data={data()}></Users2>
      //   </Suspense>
      // },
      {
        path:":dynamic",
        Component: UserDet,
        loader:({params:myParams}) =>{
          console.log(myParams)
          return myParams.dynamic
        }
      }

    ]
  },
  {
    path: '/',
    Component: App
  },
  {
    path:"*",
    Component:NotFound
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
